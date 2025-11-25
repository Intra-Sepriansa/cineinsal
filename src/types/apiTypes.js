/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {boolean} success
 * @property {T} [data]
 * @property {string} [message]
 * @property {Object} [error]
 */

/**
 * @typedef {Object} PaginatedResponse
 * @property {Array} items
 * @property {number} total
 * @property {number} page
 * @property {number} pageSize
 * @property {number} totalPages
 */

export const ApiTypes = {};
