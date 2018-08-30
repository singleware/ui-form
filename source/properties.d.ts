/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Form properties interface.
 */
export interface Properties {
  /**
   * Form classes.
   */
  class?: string;
  /**
   * Form slot.
   */
  slot?: string;
  /**
   * Form name.
   */
  name?: string;
  /**
   * Form value entity.
   */
  value?: any;
  /**
   * Form method.
   */
  method?: string;
  /**
   * Determines whether the form is required or not.
   */
  required?: boolean;
  /**
   * Determines whether the form is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines whether the form is disabled or not.
   */
  disabled?: boolean;
  /**
   * Form orientation.
   */
  orientation?: string;
  /**
   * Form children.
   */
  children?: {};
}