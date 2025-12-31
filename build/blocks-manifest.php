<?php
// This file is generated. Do not modify it manually.
return array(
	'team-members' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/team-members',
		'version' => '0.1.0',
		'title' => 'Team Members',
		'category' => 'text',
		'icon' => 'groups',
		'description' => 'This is team members block',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide'
			)
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'textdomain' => 'team-members',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
