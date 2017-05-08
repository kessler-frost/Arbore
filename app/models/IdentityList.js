// @flow
import { Record, Map } from 'immutable'
import Identity from './Identity'

/**
 * Used to store identities/accounts for the login screen
 * Identities are composed of a few properties of a full profile.
 */

export const writable = {
  identities: 'identities',
  selected: 'selected'
}

export const IdentityListRecord = Record({
  identities: Map(),
  selected: null
}, 'IdentityList')

export default class IdentityList extends IdentityListRecord {
  identities: Map<string,Identity>
  selected: ?string

  get isLogged(): boolean {
    return this.selected !== null
  }
}