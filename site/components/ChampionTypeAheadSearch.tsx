import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/components/ChampionTypeAheadSearch.module.scss";
import TypeAheadDropdown from "./TypeAheadDropdown";
import Champion from "../OOP/Models/Champion";

type Props = {
  inputReference: any;
  AllChampions: Champion[];
};

const searchLimit = 1000;
let searchResultsOptions: JSX.Element[] = [];

//refactor: Many similarities to UserSearchByUsername
const ChampionTypeAheadSearch = (props: Props) => {
  const [searchText, setSearchText]: [string, any] = useState("");
  const [dropdownState, setDropdownState] = useState({ display: "grid", width: "100%" });
  const [currentBrewId, setCurrentBrewId] = useState("none");
  useEffect(() => {
    props.inputReference.current.focus();
    searchResultsOptions = props.AllChampions.map((champion: Champion, key: number) => {
      return <li 
          key={key}
          onClick={() => {
            setSearchText(champion.Name);
            setCurrentBrewId(champion.DocumentID);
            controlAutocompleteOptions([]);
          }}
        >
          {champion.Name}
        </li>
    });
  }, props.AllChampions, props.inputReference);

  const typing = async (event) => {
    updateInputValue(event.target.value);
    await submitSearch(event);
  };
  const updateInputValue = (value) => {
    setSearchText(value);
  };

  const controlAutocompleteOptions = async (localSearchResults) => {
    searchResultsOptions = localSearchResults.map(
      (searchResult: Champion, key: number) => {
        return (
          <li 
            key={key}
            onClick={() => {
              setSearchText(searchResult.Name);
              setCurrentBrewId(searchResult.DocumentID);
              controlAutocompleteOptions([]);
            }}
          >
            {searchResult.Name}
          </li>
        );
      }
    );
  };

  const submitSearch = async (event) => {
    let numApproved: number = 0;
    let inputText: string = event.target.value;
    var breweryList: Champion[] = props.AllChampions.filter((brewery) => {
      //TODO: Make higher-order function to replicate this functionality
      //if (numApproved > 20) break;

      //normalize strings
      var breweryNameLower = brewery.Name.toLowerCase();
      var typeaheadTextLower = inputText.toLowerCase();

      if (breweryNameLower.startsWith(typeaheadTextLower)) numApproved++;
      return (
        breweryNameLower.startsWith(typeaheadTextLower) &&
        numApproved < searchLimit
      );
    });

    controlAutocompleteOptions(breweryList);
    return breweryList;
  };

  return (
    <div className={styles.wrapper}>
      <input
        data-current-brewery-id={currentBrewId}
        type="text"
        id="searchInput"
        value={searchText}
        onChange={(e) => typing(e)}
        autoComplete={"off"}
        onFocus={() => setDropdownState({ display: "grid", width: "100%" })}
        // onBlur={() => {
        //   setTimeout(function () {
        //     setDropdownState({ display: "none", width: "100%" });
        //   }, 300);
        // }}
        ref={props.inputReference}
      />
      <TypeAheadDropdown
        searchResultsOptions={searchResultsOptions}
        dropdownStyle={dropdownState}
        limit={searchLimit}
      />
    </div>
  );
};

export default ChampionTypeAheadSearch;
