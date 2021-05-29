/**
 * Accessor module for store modules. This file is auto-generated, so please don't edit it here.
 */

import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";

/* Imports for module stores. */

import AppModule from "~/store/AppModule";

/* Define the modules for the store at the top-level of the store index. */

let appModuleStore: AppModule;

/* Define a loader for those stores. */

function initialiseStores(store: Store<any>): void {
  appModuleStore = getModule(AppModule, store);
}

export { initialiseStores, appModuleStore };
