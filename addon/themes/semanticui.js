import DefaultTheme from './default';

import {alias} from '@ember/object/computed';

/**
 * @class SemanticUI
 * @namespace Themes
 * @extends Themes.Default
 */
export default DefaultTheme.extend({

  components: {
    'columns-dropdown': 'models-table/themes/semanticui/columns-dropdown',
    'global-filter': 'models-table/themes/semanticui/global-filter',
    'data-group-by-select': 'models-table/themes/semanticui/data-group-by-select',
    'pagination-simple': 'models-table/themes/semanticui/pagination-simple',
    'pagination-numeric': 'models-table/themes/semanticui/pagination-numeric',
    'select': 'models-table/themes/semanticui/select',
    'row-filtering-cell': 'models-table/themes/semanticui/row-filtering-cell',
    'summary': 'models-table/themes/semanticui/summary',
  },
  buttonDefault: 'ui button',
  globalFilterWrapper: 'ui labeled icon input',
  columnsDropdownWrapper: 'ui compact menu right floated',
  columnsDropdownDivider: 'divider',
  buttonsGroup: 'ui compact menu right floated',
  clearFilterIcon: 'remove circle link icon',
  dataGroupBySelectWrapper: 'ui labeled action input data-group-by-wrapper',
  sortGroupedPropertyBtn: 'ui icon button',
  caret: 'dropdown icon',
  table: 'ui selectable striped celled sortable table',
  'column-visible': 'toggle on icon',
  'column-hidden': 'toggle off icon',
  'sort-asc': 'sort ascending icon',
  'sort-desc': 'sort descending icon',
  clearAllFiltersIcon: 'remove circle icon',
  footerSummaryNumericPagination: 'four wide tablet wide column',
  footerSummaryDefaultPagination: alias('footerSummaryNumericPagination'),
  pageSizeWrapper: 'three wide tablet wide column',
  paginationWrapperNumeric: 'nine wide tablet wide column',
  paginationWrapperDefault: alias('paginationWrapperNumeric'),
  tfooterInternalWrapper: 'ui stackable grid middle aligned',
  'nav-first': 'angle double left icon',
  'nav-prev': 'angle left icon',
  'nav-next': 'angle right icon',
  'nav-last': 'angle double right icon',
  'expand-row': 'icon plus',
  'collapse-row': 'icon minus',
  'expand-all-rows': 'icon plus',
  'collapse-all-rows': 'icon minus',
  'select-all-rows': 'toggle on icon',
  'deselect-all-rows': 'toggle off icon',
  'select-row': 'toggle on icon',
  'deselect-row': 'toggle off icon',
  paginationBlock: 'ui icon buttons',
  currentPageSizeSelectWrapper: 'ui form right floated',
  formElementWrapper: 'inline fields',
  form: 'ui form'
});
