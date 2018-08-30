import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Form template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Form states.
     */
    private states;
    /**
     * Header element.
     */
    private headerSlot;
    /**
     * Content element.
     */
    private contentSlot;
    /**
     * Footer element.
     */
    private footerSlot;
    /**
     * Wrapper element.
     */
    private wrapper;
    /**
     * Form styles.
     */
    private styles;
    /**
     * Form skeleton.
     */
    private skeleton;
    /**
     * Form elements.
     */
    private elements;
    /**
     * Sets the specified property to all buttons in the specified element slot.
     * @param slot Element slot.
     * @param type Button type.
     * @param property Expected property.
     * @param value New property value.
     */
    private setButtonsProperty;
    /**
     * Change event handler.
     */
    private changeHandler;
    /**
     * Invalid event handler.
     * @param event Event information.
     */
    private invalidHandler;
    /**
     * Bind event handlers to update the custom element.
     */
    private bindHandlers;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all elements properties.
     */
    private assignProperties;
    /**
     * Default constructor.
     * @param properties Form properties.
     * @param children Form children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Get value entity.
     */
    /**
    * Set value entity.
    */
    value: any;
    /**
     * Get form name.
     */
    /**
    * Set form name.
    */
    name: string;
    /**
     * Get required state.
     */
    /**
    * Set required state.
    */
    required: boolean;
    /**
     * Get read-only state.
     */
    /**
    * Set read-only state.
    */
    readOnly: boolean;
    /**
     * Get disabled state.
     */
    /**
    * Set disabled state.
    */
    disabled: boolean;
    /**
     * Get orientation mode.
     */
    /**
    * Set orientation mode.
    */
    orientation: string;
    /**
     * Form element.
     */
    readonly element: Element;
}