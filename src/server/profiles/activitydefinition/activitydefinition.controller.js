/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');


/**
 * @description Construct a resource with base_version/uscore path
 */
let getResourceConstructor = (base_version) => {
	return require(resolveFromVersion(base_version, 'ActivityDefinition'));
};

/**
 * @description Controller to get a resource by history version id
 */
module.exports.searchByVersionId = function searchByVersionId({profile, logger, app}) {
	let {serviceModule: service} = profile;

	return (req, res, next) => {
		let {base_version, version_id} = req.sanitized_args;
		let ActivityDefinition = getResourceConstructor(base_version);

		return service.searchByVersionId(req.sanitized_args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, base_version, ActivityDefinition, results, version_id)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};


/**
 * @description Controller to search activitydefinition
 */
module.exports.search = function search({profile, logger, config, app}) {
	let {serviceModule: service} = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let ActivityDefinition = getResourceConstructor(base_version);

		return service.search(req.sanitized_args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse(res, base_version, ActivityDefinition, results, {
					resourceUrl: config.auth.resourceServer,
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller to searchById activitydefinition
 */
module.exports.searchById = function searchById({profile, logger, app}) {
	let {serviceModule: service} = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;
		let ActivityDefinition = getResourceConstructor(base_version);

		return service.searchById(req.sanitized_args, req.contexts, logger)
			.then((results) => {
				responseUtils.handleSingleReadResponse(res, next, base_version, ActivityDefinition, results);
			})
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for creating a activitydefinition
 */
module.exports.create = function create({profile, logger, app}) {
	let {serviceModule: service} = profile;

	return (req, res, next) => {
		let {base_version, resource_id, resource_body = {}} = req.sanitized_args;
		let ActivityDefinition = getResourceConstructor(base_version);
		// Validate the resource type before creating it
		if (ActivityDefinition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ActivityDefinition.__resourceType}', received '${resource_body.resourceType}'`,
				base_version
			));
		}
		// Create a new activitydefinition resource and pass it to the service
		let activitydefinition = new ActivityDefinition(resource_body);
		let args = {id: resource_id, resource: activitydefinition};
		// Pass any new information to the underlying service
		return service.create(args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, base_version, ActivityDefinition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for updating/creating ActivityDefinition. If ActivityDefinition does not exist, it should be updated
 */
module.exports.update = function update({profile, logger, app}) {
	let {serviceModule: service} = profile;

	return (req, res, next) => {
		let {base_version, id, resource_body = {}} = req.sanitized_args;
		let ActivityDefinition = getResourceConstructor(base_version);
		// Validate the resource type before creating it
		if (ActivityDefinition.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${ActivityDefinition.__resourceType}', received '${resource_body.resourceType}'`,
				base_version
			));
		}
		// Create a new activitydefinition resource and pass it to the service
		let activitydefinition = new ActivityDefinition(resource_body);
		let args = {id, resource: activitydefinition};
		// Pass any new information to the underlying service
		return service.update(args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, base_version, ActivityDefinition.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for deleting ActivityDefinition resource.
 */
module.exports.remove = function remove({profile, logger, app}) {
	let {serviceModule: service} = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;

		return service.remove(req.sanitized_args, req.contexts, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, base_version, err);
			});
	};
};

/**
 * @description Controller for getting the history of ActivityDefinition resource.
 */
module.exports.history = function history ({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;

		let ActivityDefinition = getResourceConstructor(base_version);

		return service.history(req.sanitized_args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleBundleHistoryResponse( res, base_version, ActivityDefinition, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};

/**
 * @description Controller for getting the history of ActivityDefinition resource by ID.
 */
module.exports.historyById = function historyById ({ profile, logger, config }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base_version } = req.sanitized_args;

		let ActivityDefinition = getResourceConstructor(base_version);

		return service.historyById(req.sanitized_args, req.contexts, logger)
			.then((results) =>
				responseUtils.handleBundleHistoryResponse( res, base_version, ActivityDefinition, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base_version));
			});
	};
};
