'use strict';

/**
 * personne-physique service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personne-physique.personne-physique');
