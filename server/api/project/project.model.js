'use strict';

import mongoose from 'mongoose';

var ObjectId = mongoose.Schema.Types.ObjectId;

var ProjectSchema = new mongoose.Schema({
	field: {
		type: String,
		required: true
	},
	site: {
		type: String,
		required: true
	},
	well: {
		type: String,
		required: true
	},
	customer: String,
	jobNumber: String,
	startDate: { type: Date, default: Date.now },
	finishDate: Date,
	isCurrent: {
		type: Boolean,
		default: false
	},
	// tenant: {
	// 	type: ObjectId,
	// 	ref: 'User',
	// 	index: true
	// }
	tenant: String
});

/**
 * Virtuals
 */

// Public project information
ProjectSchema
  .virtual('title')
  .get(function() {
		return this.field + ' - ' + this.site + ' - ' + this.well;
	}
);

/**
 * Pre-save hook
 */

// Setting for all projects isCurrent to false
ProjectSchema
  .pre('save', function(next) {
		if(this.isCurrent){
			this.isCurrent = false;
		}
		next();
	}
);
	
export default mongoose.model('Project', ProjectSchema);