/**
 * @name exports
 * @static
 * @summary Arguments for the practitioner query
 */
module.exports = {
	address: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.address',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Practitioner](practitioner.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Person](person.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  * [Patient](patient.html): A server defined search that may match any of the string fields in the Address, including line, city, state, country, postalCode, and/or text  ',
	},
	'address-city': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.address.city',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-city',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A city specified in an address  * [Practitioner](practitioner.html): A city specified in an address  * [Person](person.html): A city specified in an address  * [Patient](patient.html): A city specified in an address  ',
	},
	'address-country': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.address.country',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-country',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A country specified in an address  * [Practitioner](practitioner.html): A country specified in an address  * [Person](person.html): A country specified in an address  * [Patient](patient.html): A country specified in an address  ',
	},
	'address-postalcode': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.address.postalCode',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-postalcode',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A postal code specified in an address  * [Practitioner](practitioner.html): A postalCode specified in an address  * [Person](person.html): A postal code specified in an address  * [Patient](patient.html): A postalCode specified in an address  ',
	},
	'address-state': {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.address.state',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-state',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A state specified in an address  * [Practitioner](practitioner.html): A state specified in an address  * [Person](person.html): A state specified in an address  * [Patient](patient.html): A state specified in an address  ',
	},
	'address-use': {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Practitioner.address.use',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-address-use',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A use code specified in an address  * [Practitioner](practitioner.html): A use code specified in an address  * [Person](person.html): A use code specified in an address  * [Patient](patient.html): A use code specified in an address  ',
	},
	email: {
		type: 'token',
		fhirtype: 'token',
		xpath: "PractitionerRole.telecom[system/@value='email']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-email',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in an email contact  * [RelatedPerson](relatedperson.html): A value in an email contact  * [Practitioner](practitioner.html): A value in an email contact  * [Person](person.html): A value in an email contact  * [Patient](patient.html): A value in an email contact  ',
	},
	family: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.name.family',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-family',
		description:
			'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the family name  * [Patient](patient.html): A portion of the family name of the patient  ',
	},
	gender: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Practitioner.gender',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-gender',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): Gender of the related person  * [Practitioner](practitioner.html): Gender of the practitioner  * [Person](person.html): The gender of the person  * [Patient](patient.html): Gender of the patient  ',
	},
	given: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.name.given',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-given',
		description:
			'Multiple Resources:     * [Practitioner](practitioner.html): A portion of the given name  * [Patient](patient.html): A portion of the given name of the patient  ',
	},
	phone: {
		type: 'token',
		fhirtype: 'token',
		xpath: "PractitionerRole.telecom[system/@value='phone']",
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phone',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): A value in a phone contact  * [RelatedPerson](relatedperson.html): A value in a phone contact  * [Practitioner](practitioner.html): A value in a phone contact  * [Person](person.html): A value in a phone contact  * [Patient](patient.html): A value in a phone contact  ',
	},
	phonetic: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.name',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-phonetic',
		description:
			'Multiple Resources:     * [RelatedPerson](relatedperson.html): A portion of name using some kind of phonetic matching algorithm  * [Practitioner](practitioner.html): A portion of either family or given name using some kind of phonetic matching algorithm  * [Person](person.html): A portion of name using some kind of phonetic matching algorithm  * [Patient](patient.html): A portion of either family or given name using some kind of phonetic matching algorithm  ',
	},
	telecom: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'PractitionerRole.telecom',
		definition: 'http://hl7.org/fhir/SearchParameter/individual-telecom',
		description:
			'Multiple Resources:     * [PractitionerRole](practitionerrole.html): The value in any kind of contact  * [RelatedPerson](relatedperson.html): The value in any kind of contact  * [Practitioner](practitioner.html): The value in any kind of contact  * [Person](person.html): The value in any kind of contact  * [Patient](patient.html): The value in any kind of telecom details of the patient  ',
	},
	active: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Practitioner.active',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-active',
		description: 'Whether the practitioner record is active',
	},
	communication: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Practitioner.communication',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-communication',
		description: 'One of the languages that the practitioner can communicate with',
	},
	identifier: {
		type: 'token',
		fhirtype: 'token',
		xpath: 'Practitioner.identifier',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-identifier',
		description: "A practitioner's Identifier",
	},
	name: {
		type: 'string',
		fhirtype: 'string',
		xpath: 'Practitioner.name',
		definition: 'http://hl7.org/fhir/SearchParameter/Practitioner-name',
		description:
			'A server defined search that may match any of the string fields in the HumanName, including family, give, prefix, suffix, suffix, and/or text',
	},
};
