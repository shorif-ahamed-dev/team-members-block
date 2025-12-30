import { RichText, useBlockProps } from "@wordpress/block-editor";
import { __ } from '@wordpress/i18n'

export default function Edit({ attributes, setAttributes }) {
    const { name, bio } = attributes

    const onChangeName = (name) => {
        setAttributes({ name })
    }
    const onChangeBio = (bio) => {
        setAttributes({ bio })
    }
    return <div {...useBlockProps()}>
        <RichText
            placeholder={__("Member Name", 'team-member')}
            tagName="h4"
            onChange={onChangeName}
            value={name}
        />
        <RichText
            placeholder={__("Member Bio", 'team-member')}
            tagName="p"
            onChange={onChangeBio}
            value={bio}
        />
    </div>
}