import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Icon } from "@wordpress/components"
import { __ } from "@wordpress/i18n"


export default function SortableItem(props) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition: transition
    }
    return <li
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className={props.selectedLink === props.index ? "is-selected" : null}
    >

        <button
            onClick={() => props.setSelectedLink(props.index)}
            aria-label={__('Edit Social Link', "team-members")}>
            <Icon icon={props.icon} />
        </button>
    </li>
}