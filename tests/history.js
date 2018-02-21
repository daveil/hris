"use strict";
define(['model'],function($model){
	return new $model(
			{
				meta:{
					title: 'History',
				},
				data:[
					{date:'Jan 1', description:'Sample',submitted:'Jan 2', status:'approved'},
					{date:'Jan 1', description:'Sample',submitted:'Jan 2', status:'approved'},
					{date:'Jan 1', description:'Sick Leave',submitted:'Jan 2', status:'approved'},
					{date:'Jan 1', description:'Sample',submitted:'Jan 2', status:'approved'},
				]
			}
		);
});