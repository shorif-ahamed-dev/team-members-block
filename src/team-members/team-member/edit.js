import {
    useBlockProps,
    RichText,
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow,
    InspectorControls,
    store as blockEditorStore
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { Icon, Spinner, Tooltip, withNotices } from '@wordpress/components';
import { useEffect, useState, useRef } from "@wordpress/element";
import { ToolbarButton, PanelBody, TextControl, TextareaControl, SelectControl, } from '@wordpress/components';
import { useSelect } from "@wordpress/data"
import { usePrevious } from "@wordpress/compose"
import { Button } from '@wordpress/components';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'

import SortableItem from "./sortable-item"


function Edit({ attributes, setAttributes, noticeOperations, noticeUI, isSelected }) {
    const { name, bio, url, alt, id, socialLinks } = attributes;
    const [blobURL, setBlobURL] = useState()
    const [selectedLink, setSelectedLink] = useState()
    const prevUrl = usePrevious(url);
    const prevIsSelected = usePrevious(isSelected);
    const titleRef = useRef()
    const imageObject = useSelect((select) => {
        const { getMedia } = select('core')
        return id ? getMedia(id) : null
    }, [])
    const imageSizes = useSelect((select) => {
        return select(blockEditorStore).getSettings().imageSizes
    }, [])
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: { distance: 5 }
    }))

    // function 
    const getImageSizeOptions = () => {
        if (!imageObject) return [];
        const options = []
        const sizes = imageObject.media_details.sizes;
        for (const key in sizes) {
            const size = sizes[key];
            const imageSize = imageSizes.find(s => s.slug === key)


            if (imageSize) {
                options.push({
                    label: imageSize.name,
                    value: size.source_url
                })
            }



        }

        return options
    }
    const onChangeImageSize = (newUrl) => {
        setAttributes({ url: newUrl })
    }
    const onChangeName = (newName) => {
        setAttributes({ name: newName });
    };
    const onChangeBio = (newBio) => {
        setAttributes({ bio: newBio });
    };
    const onSelectImage = (image) => {
        if (!image || !image.url) {
            setAttributes({ url: undefined, id: undefined, alt: '' });
            return;
        }
        setAttributes({ url: image.url, id: image.id, alt: image.alt });
    };
    const onSelectURL = (newURL) => {
        setAttributes({
            url: newURL,
            id: undefined,
            alt: '',
        });
    };
    const onUploadError = (message) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
    };
    const removeImage = () => {
        setAttributes({
            url: undefined,
            id: undefined,
            alt: '',
        });
    }
    const onChangeAlt = (alt) => {
        setAttributes({ alt })
    }
    const addNewSocialItem = () => {
        setAttributes({
            socialLinks: [...socialLinks, { icon: "wordpress", link: "" }]
        })
        setSelectedLink(socialLinks.length)
    }
    const updateSocialItem = (type, value) => {
        const newSocialLinks = [...socialLinks]
        newSocialLinks[selectedLink][type] = value;
        setAttributes({ socialLinks: newSocialLinks })
    }
    const removeSocialItem = () => {
        const newSocialLinks = socialLinks.filter((link, index) => index !== (selectedLink))
        setAttributes({ socialLinks: newSocialLinks })
        setSelectedLink()
    }
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = socialLinks.findIndex((i) => active.id === `${i.icon}-${i.link}`);
            const newIndex = socialLinks.findIndex((i) => over.id === `${i.icon}-${i.link}`);
            setAttributes({
                socialLinks: arrayMove(socialLinks, oldIndex, newIndex)
            })
            setSelectedLink(newIndex)
        }
    }
    useEffect(() => {
        if (!id && isBlobURL(url)) {
            setAttributes({
                url: undefined,
                alt: ''

            })
        }
    }, [])
    useEffect(() => {
        if (isBlobURL(url)) {
            setBlobURL(url)
        } else {
            revokeBlobURL(blobURL)
            setBlobURL()
        }
    }, [url])
    useEffect(() => {
        if (url && !prevUrl && isSelected) {
            titleRef.current.focus()
        }
    }, [url, prevUrl])
    useEffect(() => {
        if (prevIsSelected && !isSelected) {
            setSelectedLink()
        }
    }, [isSelected, prevIsSelected])
    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Image Settings', 'team-members')}>
                    {id && <SelectControl
                        label={__('Select Size', 'team-members')}
                        options={getImageSizeOptions()}
                        value={url}

                        onChange={onChangeImageSize}
                    />}
                    {url && !isBlobURL(url) && <TextareaControl
                        label={__('Alt Text', 'team-members')}
                        value={alt}
                        onChange={onChangeAlt}
                        help={__('Alternative text describes you image to people cant see Item. Add a short description with its key details', 'team-mmbers')}
                    />}
                </PanelBody>
            </InspectorControls>
            {url &&
                <BlockControls group="inline">
                    <MediaReplaceFlow
                        name={__("Replace Image", "team-members")}
                        onSelect={onSelectImage}
                        onSelectURL={onSelectURL}
                        onError={onUploadError}
                        accept="image/*"
                        allowedTypes={['image']}
                        mediaId={id}
                        mediaURL={url}
                    />
                    <ToolbarButton onClick={removeImage} >
                        {__('Remvoe Image', "team-members")}
                    </ToolbarButton>
                </BlockControls>
            }
            <div {...useBlockProps()}>
                {url && (
                    <div
                        className={`wp-block-create-block-team-member-img${isBlobURL(url) ? ' is-loading' : ''
                            }`}
                    >
                        <img src={url} alt={alt} />
                        {isBlobURL(url) && <Spinner />}
                    </div>
                )}
                <MediaPlaceholder
                    icon="admin-users"
                    onSelect={onSelectImage}
                    onSelectURL={onSelectURL}
                    onError={onUploadError}
                    accept="image/*"
                    allowedTypes={['image']}
                    disableMediaButtons={url}
                    notices={noticeUI}
                />
                <RichText
                    ref={titleRef}
                    placeholder={__('Member Name', 'team-member')}
                    tagName="h4"
                    onChange={onChangeName}
                    value={name}
                    allowedFormats={[]}
                />
                <RichText
                    placeholder={__('Member Bio', 'team-member')}
                    tagName="p"
                    onChange={onChangeBio}
                    value={bio}
                    allowedFormats={[restrictToHorizontalAxis]}
                />
                <div className='wp-block-create-block-course-team-member-social-links'>
                    <ul>
                        <DndContext
                            sensors={sensors}
                            onDragEnd={handleDragEnd}
                            modifiers={[]}
                        >
                            <SortableContext
                                items={socialLinks.map((item) => `${item.icon}-${item.link}`)}
                                strategy={horizontalListSortingStrategy}
                            >
                                {socialLinks.map((item, index) => {
                                    return (
                                        <SortableItem
                                            key={`${item.icon}-${item.link}`}
                                            id={`${item.icon}-${item.link}`}
                                            index={index}
                                            selectedLink={selectedLink}
                                            setSelectedLink={setSelectedLink}
                                            icon={item.icon}
                                        />
                                    )
                                })}
                            </SortableContext>
                        </DndContext>
                        {/* {
                            socialLinks.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={selectedLink === index ? "is-selected" : null}
                                    >
                                        <button
                                            onClick={() => setSelectedLink(index)}
                                            aria-label={__('Edit Social Link', "team-members")}>
                                            <Icon icon={item.icon} />
                                        </button>
                                    </li>
                                )
                            })
                        } */}
                        {isSelected &&
                            <li className="wp-block-create-block-course-team-member-add-icon-li">
                                <Tooltip text={__('Add Social Link', "team-members")}>

                                    <button
                                        aria-label={__('Add Social Link', "team-members")}
                                        onClick={addNewSocialItem}
                                    >
                                        <Icon icon="plus" />
                                    </button>
                                </Tooltip>
                            </li>}
                    </ul>
                </div>
                {selectedLink !== undefined &&
                    <div className='wp-block-create-block-team-member-link-form'>
                        <TextControl
                            label={__('Icon', 'team-members')}
                            onChange={(icon) => { updateSocialItem('icon', icon) }}
                            value={socialLinks[selectedLink]?.icon}
                        />
                        <TextControl
                            label={__('URL', 'team-members')}
                            onChange={(link) => { updateSocialItem('link', link) }}
                            value={socialLinks[selectedLink]?.link}
                        />
                        <br />
                        <Button
                            isDestructive
                            onClick={removeSocialItem}
                        >
                            {__('Remove Link', "team-members")}
                        </Button>
                    </div>}
            </div >
        </>
    );
}

export default withNotices(Edit);