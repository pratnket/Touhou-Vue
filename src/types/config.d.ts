import { ComponentCustomProperties } from 'vue'

// export declare interface Config {
//   /**
//    * @internal
//    */
//   /**
//    * Current {@link RouteLocationNormalized}
//    */
//   readonly currentRoute: Ref<RouteLocationNormalizedLoaded>;
//   /**
//    * Original options object passed to create the Router
//    */
//   readonly options: RouterOptions;
//   /**
//    * Add a new {@link RouteRecordRaw | Route Record} as the child of an existing route.
//    *
//    * @param parentName - Parent Route Record where `route` should be appended at
//    * @param route - Route Record to add
//    */
//   addRoute(parentName: RouteRecordName, route: RouteRecordRaw): () => void;
//   /**
//    * Add a new {@link RouteRecordRaw | route record} to the router.
//    *
//    * @param route - Route Record to add
//    */
//   addRoute(route: RouteRecordRaw): () => void;
//   /**
//    * Remove an existing route by its name.
//    *
//    * @param name - Name of the route to remove
//    */
//   removeRoute(name: RouteRecordName): void;
//   /**
//    * Checks if a route with a given name exists
//    *
//    * @param name - Name of the route to check
//    */
//   hasRoute(name: RouteRecordName): boolean;
//   /**
//    * Get a full list of all the {@link RouteRecord | route records}.
//    */
//   getRoutes(): RouteRecord[];
//   /**
//    * Returns the {@link RouteLocation | normalized version} of a
//    * {@link RouteLocationRaw | route location}. Also includes an `href` property
//    * that includes any existing `base`. By default the `currentLocation` used is
//    * `route.currentRoute` and should only be overriden in advanced use cases.
//    *
//    * @param to - Raw route location to resolve
//    * @param currentLocation - Optional current location to resolve against
//    */
//   resolve(to: RouteLocationRaw, currentLocation?: RouteLocationNormalizedLoaded): RouteLocation & {
//       href: string;
//   };
//   /**
//    * Programmatically navigate to a new URL by pushing an entry in the history
//    * stack.
//    *
//    * @param to - Route location to navigate to
//    */
//   push(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>;
//   /**
//    * Programmatically navigate to a new URL by replacing the current entry in
//    * the history stack.
//    *
//    * @param to - Route location to navigate to
//    */
//   replace(to: RouteLocationRaw): Promise<NavigationFailure | void | undefined>;
//   /**
//    * Go back in history if possible by calling `history.back()`. Equivalent to
//    * `router.go(-1)`.
//    */
//   back(): ReturnType<Router['go']>;
//   /**
//    * Go forward in history if possible by calling `history.forward()`.
//    * Equivalent to `router.go(1)`.
//    */
//   forward(): ReturnType<Router['go']>;
//   /**
//    * Allows you to move forward or backward through the history. Calls
//    * `history.go()`.
//    *
//    * @param delta - The position in the history to which you want to move,
//    * relative to the current page
//    */
//   go(delta: number): void;
//   /**
//    * Add a navigation guard that executes before any navigation. Returns a
//    * function that removes the registered guard.
//    *
//    * @param guard - navigation guard to add
//    */
//   beforeEach(guard: NavigationGuardWithThis<undefined>): () => void;
//   /**
//    * Add a navigation guard that executes before navigation is about to be
//    * resolved. At this state all component have been fetched and other
//    * navigation guards have been successful. Returns a function that removes the
//    * registered guard.
//    *
//    * @example
//    * ```js
//    * router.beforeEach(to => {
//    *   if (to.meta.requiresAuth && !isAuthenticated) return false
//    * })
//    * ```
//    *
//    * @param guard - navigation guard to add
//    */
//   beforeResolve(guard: NavigationGuardWithThis<undefined>): () => void;
//   /**
//    * Add a navigation hook that is executed after every navigation. Returns a
//    * function that removes the registered hook.
//    *
//    * @example
//    * ```js
//    * router.afterEach((to, from, failure) => {
//    *   if (isNavigationFailure(failure)) {
//    *     console.log('failed navigation', failure)
//    *   }
//    * })
//    * ```
//    *
//    * @param guard - navigation hook to add
//    */
//   afterEach(guard: NavigationHookAfter): () => void;
//   /**
//    * Adds an error handler that is called every time a non caught error happens
//    * during navigation. This includes errors thrown synchronously and
//    * asynchronously, errors returned or passed to `next` in any navigation
//    * guard, and errors occurred when trying to resolve an async component that
//    * is required to render a route.
//    *
//    * @param handler - error handler to register
//    */
//   onError(handler: _ErrorHandler): () => void;
//   /**
//    * Returns a Promise that resolves when the router has completed the initial
//    * navigation, which means it has resolved all async enter hooks and async
//    * components that are associated with the initial route. If the initial
//    * navigation already happened, the promise resolves immediately.
//    *
//    * This is useful in server-side rendering to ensure consistent output on both
//    * the server and the client. Note that on server side, you need to manually
//    * push the initial location while on client side, the router automatically
//    * picks it up from the URL.
//    */
//   isReady(): Promise<void>;
//   /**
//    * Called automatically by `app.use(router)`. Should not be called manually by
//    * the user.
//    *
//    * @internal
//    * @param app - Application that uses the router
//    */
//   install(app: App): void;
// }

declare interface Config {

  /**
   * 測試
   */
  BASE_URL:void;
}

// 宣告要擴充@vue/runtime-core包的宣告.
// 這裡擴充 "ComponentCustomProperties" 接口, 因為他是vue3中實例的屬性的類型.
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    // $config: Record<string, unknown>;
    $config: Config;
  }
}