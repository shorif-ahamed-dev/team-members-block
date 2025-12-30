import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n'

export default function Save({ attributes }) {
    const { name, bio } = attributes


    return <div {...useBlockProps.save()}>
        <RichText.Content
            placeholder={__("Member Name", 'team-member')}
            tagName="h4"
            value={name}
        />
        <RichText.Content
            placeholder={__("Member Bio", 'team-member')}
            tagName="p"
            value={bio}
        />
    </div>
}