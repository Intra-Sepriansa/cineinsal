/**
 * @typedef {Object} Plan
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string} currency
 * @property {string} interval - 'month' | 'year'
 * @property {Array<string>} features
 */

/**
 * @typedef {Object} Subscription
 * @property {string} id
 * @property {string} userId
 * @property {string} planId
 * @property {string} status - 'active' | 'canceled' | 'past_due'
 * @property {string} currentPeriodEnd
 */

export const SubscriptionTypes = {};
