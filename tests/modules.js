"use strict";
define(['model'],function($model){
	return new $model(
			{
				meta:{
					title: 'Modules',
				},
				data:[
					{
						"id": 1,
						"name": "Sample",
						"link": "pages/sample",
						"is_parent": 0,
						"is_child": 0,
						"sequence": 1,
						"created_by": "",
						"modified_by": ""
						},
						{
						"id": 2,
						"name": "User",
						"link": "",
						"is_parent": 1,
						"is_child": 0,
						"sequence": 2,
						"created_by": "",
						"modified_by": ""
						},
						{
						"id": 3,
						"name": "Profile",
						"link": "dashboard/user",
						"is_parent": 0,
						"is_child": 1,
						"sequence": 3,
						"created_by": "",
						"modified_by": ""
						},
						{
						"id": 4,
						"name": "Sample",
						"link": "pages/sample",
						"is_parent": 0,
						"is_child": 1,
						"sequence": 4,
						"created_by": "",
						"modified_by": ""
						}
				]
			}
		);
});