import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from "@wordpress/components"
import { RangeControl } from '@wordpress/components';
export default function Edit({ attributes, setAttributes }) {

	const { columns } = attributes

	const onChangeColumns = (columns) => {
		setAttributes({ columns })
	}
	return (
		<div {...useBlockProps({
			className: `has-${columns}-columns`
		})}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Columns', 'team-members')}
						min={1}
						max={6}
						onChange={onChangeColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={['create-block/team-member']}
				template={
					[
						['create-block/team-member'],
						['create-block/team-member'],
						['create-block/team-member'],

					]

				}
			// templateLock="all"
			/>
		</div>
	);
}
