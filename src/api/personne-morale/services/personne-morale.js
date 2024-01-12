'use strict';

/**
 * personne-morale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personne-morale.personne-morale');
