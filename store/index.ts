/**
 * Allow access to the Vuex store from elsewhere in the app.
 *
 * We load an empty store at first and dynamically register modules at a later point.
 *
 * This file does not need to be edited frequently.
 */

import { Store } from "vuex";

import { initialiseStores } from "@/utils/store-accessor";

/* Define an initialiser for the modules. */

const initializer: (store: Store<any>) => void = (store: Store<any>) => initialiseStores(store);

/* Export the initializer as a plugin. */

export const plugins = [initializer];

/* Re-export the modules such that they can be imported from the store. */

export * from "@/utils/store-accessor";
