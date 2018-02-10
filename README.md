## UI-Router for Angular - Sample Application

[![Travis badge](https://travis-ci.org/ui-router/sample-app-angular.svg?branch=master)](https://travis-ci.org/ui-router/sample-app-angular)
[![Greenkeeper badge](https://badges.greenkeeper.io/ui-router/sample-app-angular.svg)](https://greenkeeper.io/)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

Live demo: http://ui-router.github.io/sample-app-angular/#/mymessages/inbox/5648b50cc586cac4aed6836f

Edit this project in your browser: https://stackblitz.com/github/ui-router/sample-app-angular

This sample app is intended to demonstrate a non-trivial ui-router application.

- Multiple sub-modules
- Managed state lifecycle
- Application data lifecycle
- Authentication (simulated)
- Authenticated and unauthenticated states
- REST data retrieval (simulated)
- Lazy loaded Angular modules (contacts/mymessages/prefs submodules)

---

### Visualizer

We're using the [State and Transition Visualizer](http://github.com/ui-router/visualizer) to visually represent 
the current state tree, as well as the transitions between states.
Explore how transitions work by hovering over them, and clicking to expand details (params and resolves).

Note how states are _entered_ when they were previously not active, _exited_ and re-_entered_ when parameters change,
 and how parent states whose parameters did not change are _retained_.
Each of these (_exited, entered, retained_) correspond to a Transition Hook.

### Structure

There are many ways to structure a ui-router app.
We aren't super opinionated on application structure.
Use what works for you.
We organized ours in the following way:

- Feature modules
  - Each feature gets its own directory and Angular Module (`@NgModule`)
  - Features contain states and components
  - Specific types of helper code (directives, services, etc) _used only within a feature_ may live in a subdirectory
  named after its type
- Leveraging ES6 modules
  - States for a module are defined in separate file
  - Each component is defined in its own file
  - Components are referenced in states where they are composed into the state definition
  - States export themselves
  - Each feature `@NgModule` imports and declares all the states for the feature

### UI-Router Patterns
  
- Defining custom, app-specific global behaviors
  - Add metadata to a state, or state tree (such as `authRequired`)
  - Check for metadata in transition hooks
  - Example: `routerhooks/authRequired.js`
    - If a transition to a state with a truthy `data.authRequired: true` property is started and the user is not currently authenticated
- Defining a default substate for a top-level state
  - Example: declaring `redirectTo: 'welcome'` in `app.states.ts`
- Defining a default parameter for a state
  - Example: `folderId` parameter defaults to 'inbox' in `mymessages.states.ts` (folder state)
- Application data lifecycle
  - Data loading is managed by the state declaration, via the `resolve:` block
  - Data is fetched before the state is _entered_
  - Data is fetched according to state parameters
  - The state is _entered_ when the data is ready
  - The resolved data is injected into the components
  - The resolve data remains loaded until the state is exited
- Lazy Loaded states
  - The main submodules (and all their states and components) are lazy loaded
  - The future state includes a `loadChildren` property which is used to lazy load the module
