import React, { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import {
    Authenticator,
    buildCollection,
    buildProperty,
    EntityReference,
    FirebaseCMSApp
} from "@camberi/firecms";

import "typeface-rubik";
import "@fontsource/ibm-plex-mono";

import Skill from "../Types/Skill";
import BoughtItem from "../Types/BoughtItem";
import Champion from "../Types/Champion";
import Crest from "../Types/Crest";
import ItemEffect from "../Types/ItemEffect";

const firebaseConfig = {
    apiKey: "AIzaSyDoDVjvART9USuiZvgecLfYjQSEoPLB_pU",
    authDomain: "toppredgg.firebaseapp.com",
    projectId: "toppredgg",
    storageBucket: "toppredgg.appspot.com",
    messagingSenderId: "333593815285",
    appId: "1:333593815285:web:06ab412e8ce17dd367fdbc",
    measurementId: "G-X2ZJ963QVR"
  };

const itemEffectCollection = buildCollection<ItemEffect>({
    path: "itemEffect",
    customId: "optional",
    name: "ItemEffect",
    singularName: "ItemEffect",
    properties: {
        DocumentID: {
            name: "DocumentID",
            validation: { required: true },
            dataType: "string"
        }
    }
});

const crestsCollection = buildCollection<Crest>({
    name: "Crest",
    singularName: "Crest",
    path: "crest",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        itemEffectCollection
    ],
    properties: {
        Name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        Image: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Image",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        Description: {
            name: "Description",
            description: "Not mandatory but it'd be awesome if you filled this up",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        }
    }
});

const boughtItemsCollection = buildCollection<BoughtItem>({
    name: "Bought Items",
    singularName: "BoughtItem",
    path: "boughtitem",
    permissions: ({ authController }) => ({
        edit: true,
        create: true,
        // we have created the roles object in the navigation builder
        delete: false
    }),
    subcollections: [
        itemEffectCollection
    ],
    properties: {
        Name: {
            name: "Name",
            validation: { required: true },
            dataType: "string"
        },
        Price: {
            name: "Price",
            validation: {
                required: true,
                requiredMessage: "You must set a price between 0 and 1000",
            },
            description: "Price with range validation",
            dataType: "number"
        },
        Image: buildProperty({ // The `buildProperty` method is a utility function used for type checking
            name: "Image",
            dataType: "string",
            storage: {
                storagePath: "images",
                acceptedFiles: ["image/*"]
            }
        }),
        Description: {
            name: "Description",
            description: "Not mandatory but it'd be awesome if you filled this up",
            longDescription: "Example of a long description hidden under a tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis bibendum turpis. Sed scelerisque ligula nec nisi pellentesque, eget viverra lorem facilisis. Praesent a lectus ac ipsum tincidunt posuere vitae non risus. In eu feugiat massa. Sed eu est non velit facilisis facilisis vitae eget ante. Nunc ut malesuada erat. Nullam sagittis bibendum porta. Maecenas vitae interdum sapien, ut aliquet risus. Donec aliquet, turpis finibus aliquet bibendum, tellus dui porttitor quam, quis pellentesque tellus libero non urna. Vestibulum maximus pharetra congue. Suspendisse aliquam congue quam, sed bibendum turpis. Aliquam eu enim ligula. Nam vel magna ut urna cursus sagittis. Suspendisse a nisi ac justo ornare tempor vel eu eros.",
            dataType: "string",
            columnWidth: 300
        }
    }
});

export default function App() {

    const myAuthenticator: Authenticator<FirebaseUser> = useCallback(async ({
                                                                    user,
                                                                    authController
                                                                }) => {

        if (user?.email?.includes("flanders")) {
            throw Error("Stupid Flanders!");
        }

        console.log("Allowing access to", user?.email);
        // This is an example of retrieving async data related to the user
        // and storing it in the user extra field.
        const sampleUserRoles = await Promise.resolve(["admin"]);
        authController.setExtra(sampleUserRoles);

        return true;
    }, []);

    return <FirebaseCMSApp
        name={"Top Predecessor CMS"}
        collections={[crestsCollection, boughtItemsCollection]}
        firebaseConfig={firebaseConfig}
    />;
}