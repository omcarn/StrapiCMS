'use strict';

/**
 * images service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::images.images');
