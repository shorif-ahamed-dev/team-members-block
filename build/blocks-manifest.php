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
			'attributes' => array(
				'columns' => 2
			),
			'innerBlocks' => array(
				array(
					'name' => 'create-block/team-member',
					'attributes' => array(
						'name' => 'John Doe',
						'bio' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque nibh, tincidunt ut facilisis vitae, ullamcorper sit amet lectus. Proin porta vulputate purus.',
						'url' => 'https://picsum.photos/id/1012/300/200',
						'socialLinks' => array(
							array(
								'icon' => 'facebook'
							),
							array(
								'icon' => 'twitter'
							),
							array(
								'icon' => 'instagram'
							)
						)
					)
				),
				array(
					'name' => 'create-block/team-member',
					'attributes' => array(
						'name' => 'Jane Doe',
						'bio' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque nibh, tincidunt ut facilisis vitae, ullamcorper sit amet lectus. Proin porta vulputate purus.',
						'url' => 'https://picsum.photos/id/1011/300/200',
						'socialLinks' => array(
							array(
								'icon' => 'facebook'
							),
							array(
								'icon' => 'twitter'
							),
							array(
								'icon' => 'instagram'
							)
						)
					)
				)
			)
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
