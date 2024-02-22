'use strict';

/**
 * bouquet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bouquet.bouquet');
