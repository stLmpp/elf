import {
  BaseEntityOptions,
  DefaultEntitiesRef,
  defaultEntitiesRef,
  EntitiesRef,
  EntitiesState,
  getEntityType,
  getIdKey,
  getIdType,
} from './entity.state';
import {OrArray} from '../core/types';
import {Reducer, Store} from '../core/store';
import {buildEntities} from './entity.utils';
import {coerceArray} from "../core/utils";
import {deleteEntities} from "./delete.mutation";

/**
 *
 * Add entities
 *
 * @example
 *
 * store.reduce(addEntities(entity))
 *
 * store.reduce(addEntities([entity, entity]))
 *
 * store.reduce(addEntities([entity, entity]), { prepend: true })
 *
 */
export function addEntities<S extends EntitiesState<Ref>,
  Ref extends EntitiesRef = DefaultEntitiesRef>(
  entities: OrArray<getEntityType<S, Ref>>,
  options: {
    prepend?: boolean;
  } & BaseEntityOptions<Ref> = {}
): Reducer<S> {
  return function reducer(state: S, store: Store) {
    const {prepend = false, ref = defaultEntitiesRef} = options;

    const {entitiesKey, idsKey} = ref!;

    const {ids, asObject} = buildEntities<S, Ref>(
      ref as Ref,
      entities,
      getIdKey(store, ref)
    );

    return {
      ...state,
      [entitiesKey]: {...state[entitiesKey], ...asObject},
      [idsKey]: prepend
        ? [...ids, ...state[idsKey]]
        : [...state[idsKey], ...ids],
    };
  };
}


/**
 *
 * Add entities using fifo
 *
 * @example
 *
 *
 * store.reduce(addEntitiesFifo([entity, entity]), { limit: 3 })
 *
 */
export function addEntitiesFifo<S extends EntitiesState<Ref>,
  Ref extends EntitiesRef = DefaultEntitiesRef>(
  entities: OrArray<getEntityType<S, Ref>>,
  options: {
    limit: number
  } & BaseEntityOptions<Ref>
): Reducer<S> {
  return function (state: S, store: Store) {
    const {ref = defaultEntitiesRef, limit} = options;

    const {entitiesKey, idsKey} = ref!;
    const currentIds: getIdType<S, Ref>[] = state[idsKey];

    let normalizedEntities = coerceArray(entities);
    let newState: S = state;

    if (normalizedEntities.length > limit) {
      // Remove new entities that passes the limit
      normalizedEntities = normalizedEntities.slice(normalizedEntities.length - limit);
    }

    const total = currentIds.length + normalizedEntities.length;

    // Remove exiting entities that passes the limit
    if (total > limit) {
      const idsRemove = currentIds.slice(0, total - limit);
      newState = deleteEntities<S, Ref>(idsRemove)(state, store);
    }

    const {ids, asObject} = buildEntities<S, Ref>(
      ref as Ref,
      normalizedEntities,
      getIdKey(store, ref)
    );

    return {
      ...state,
      [entitiesKey]: {...newState[entitiesKey], ...asObject},
      [idsKey]: [...newState[idsKey], ...ids],
    };
  }
}