In Memory Object Store
===

## Description:

Create a in-memory (not persisted to file system) database library that provides an "object store" interface to manage objects.

Standard repository/dev stuff: README, package.json, travis-ci, tests, meaningful commits, named npm scripts, etc.


## Testing

Use TDD to drive the implementation. Think about the tests in terms of behavior, not implementation. If I store
an object, it is because I want to retrieve it, not because I want to know how the store manages saving the object.

## Requirements/Guidelines

* Use `npm` to find a package for generating id's.
* Your module "interface" needs to allow for "creating" a store:
  * Revealing module
  * `class`
* Use `beforeEach` to reduce side effects between tests

Your store should offer the following methods:

* `.save(<objectToSave>)`
  * creates an `_id` property on the object
  * returns `objectToSave` with added `_id` property
* `.get(<id>)`
  * returns the object that has that id
  * return `null` if that id does not exist
* `.getAll()`
  * returns array of all objects
  * return empty array `[]` when no objects
* `.remove(<id>)`
  * removes the object from the store that has that id
  * return `{ removed: true }` if the object was removed, else return `{ removed: false }` if the 
  object did not exist
  

## Advanced/Bonus:

* Use something other than `.find` to more efficiently retrieve object by id. Can be an object as a dictionary, or checkout `Map` to "index" objects by `_id`. 
You'll need to also access as a list, so think about both usages.
* Add `.update(<objectToUpdate>)`
  * reads the `_id` property from the object (error if it is not found):
  ```js
  const id = objectToUpdate._id;
  if(!id) {
      callback(new Error('Expected object to have an _id property'));
      return;
  }
  ```
  * saves the provided object as the object
  * returns `objectToUpdate`
  
## Rubric:

* Tests: 4pts
* Correct Behavior: 4pts
* Project (Module) Organization: 2pts
