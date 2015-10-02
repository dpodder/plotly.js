"use strict";
var plotButtons = require("./buttons");
var plots={};
plots["gl2d_10"]=require("./testplots-2d/gl2d_10.json");
plots["gl2d_14"]=require("./testplots-2d/gl2d_14.json");
plots["gl2d_12"]=require("./testplots-2d/gl2d_12.json");
plots["gl2d_15"]=require("./testplots-2d/gl2d_15.json");
plots["gl2d_17"]=require("./testplots-2d/gl2d_17.json");
plots["gl2d_19"]=require("./testplots-2d/gl2d_19.json");
plots["gl2d_18"]=require("./testplots-2d/gl2d_18.json");
plots["gl2d_20"]=require("./testplots-2d/gl2d_20.json");
plots["gl2d_22"]=require("./testplots-2d/gl2d_22.json");
plots["gl2d_23"]=require("./testplots-2d/gl2d_23.json");
plots["gl2d_24"]=require("./testplots-2d/gl2d_24.json");
plots["gl2d_28"]=require("./testplots-2d/gl2d_28.json");
plots["gl2d_27"]=require("./testplots-2d/gl2d_27.json");
plots["gl2d_29"]=require("./testplots-2d/gl2d_29.json");
plots["gl2d_26"]=require("./testplots-2d/gl2d_26.json");
plots["gl2d_30"]=require("./testplots-2d/gl2d_30.json");
plots["gl2d_2dhistogram_contour_subplots"]=require("./testplots-2d/gl2d_2dhistogram_contour_subplots.json");
plots["gl2d_32"]=require("./testplots-2d/gl2d_32.json");
plots["gl2d_5"]=require("./testplots-2d/gl2d_5.json");
plots["gl2d_6"]=require("./testplots-2d/gl2d_6.json");
plots["gl2d_8"]=require("./testplots-2d/gl2d_8.json");
plots["gl2d_axes_booleans"]=require("./testplots-2d/gl2d_axes_booleans.json");
plots["gl2d_axes_labels"]=require("./testplots-2d/gl2d_axes_labels.json");
plots["gl2d_axes_lines"]=require("./testplots-2d/gl2d_axes_lines.json");
plots["gl2d_axes_range_manual"]=require("./testplots-2d/gl2d_axes_range_manual.json");
plots["gl2d_axes_range_type"]=require("./testplots-2d/gl2d_axes_range_type.json");
plots["gl2d_axes_range_mode"]=require("./testplots-2d/gl2d_axes_range_mode.json");
plots["gl2d_axes_reversed"]=require("./testplots-2d/gl2d_axes_reversed.json");
plots["gl2d_bar_line"]=require("./testplots-2d/gl2d_bar_line.json");
plots["gl2d_axes-ticks"]=require("./testplots-2d/gl2d_axes-ticks.json");
plots["gl2d_basic_area"]=require("./testplots-2d/gl2d_basic_area.json");
plots["gl2d_basic_error_bar"]=require("./testplots-2d/gl2d_basic_error_bar.json");
plots["gl2d_basic_line"]=require("./testplots-2d/gl2d_basic_line.json");
plots["gl2d_bubble_markersize0"]=require("./testplots-2d/gl2d_bubble_markersize0.json");
plots["gl2d_bubble_nonnumeric-sizes"]=require("./testplots-2d/gl2d_bubble_nonnumeric-sizes.json");
plots["gl2d_bubblechart"]=require("./testplots-2d/gl2d_bubblechart.json");
plots["gl2d_contour_scatter"]=require("./testplots-2d/gl2d_contour_scatter.json");
plots["gl2d_date_axes"]=require("./testplots-2d/gl2d_date_axes.json");
plots["gl2d_custom_size_subplot"]=require("./testplots-2d/gl2d_custom_size_subplot.json");
plots["gl2d_error_bar_asymmetric_array"]=require("./testplots-2d/gl2d_error_bar_asymmetric_array.json");
plots["gl2d_error_bar_asymmetric_constant"]=require("./testplots-2d/gl2d_error_bar_asymmetric_constant.json");
plots["gl2d_error_bar_horizontal"]=require("./testplots-2d/gl2d_error_bar_horizontal.json");
plots["gl2d_error_bar_style"]=require("./testplots-2d/gl2d_error_bar_style.json");
plots["gl2d_fonts"]=require("./testplots-2d/gl2d_fonts.json");
plots["gl2d_global_font"]=require("./testplots-2d/gl2d_global_font.json");
plots["gl2d_japanese"]=require("./testplots-2d/gl2d_japanese.json");
plots["gl2d_legend_inside"]=require("./testplots-2d/gl2d_legend_inside.json");
plots["gl2d_legend_labels"]=require("./testplots-2d/gl2d_legend_labels.json");
plots["gl2d_legend_outside"]=require("./testplots-2d/gl2d_legend_outside.json");
plots["gl2d_legend_style"]=require("./testplots-2d/gl2d_legend_style.json");
plots["gl2d_legendgroup"]=require("./testplots-2d/gl2d_legendgroup.json");
plots["gl2d_line_scatter"]=require("./testplots-2d/gl2d_line_scatter.json");
plots["gl2d_line_style"]=require("./testplots-2d/gl2d_line_style.json");
plots["gl2d_multiple_axes_double"]=require("./testplots-2d/gl2d_multiple_axes_double.json");
plots["gl2d_multiple_axes_multiple"]=require("./testplots-2d/gl2d_multiple_axes_multiple.json");
plots["gl2d_multiple_subplots"]=require("./testplots-2d/gl2d_multiple_subplots.json");
plots["gl2d_percent_error_bar"]=require("./testplots-2d/gl2d_percent_error_bar.json");
plots["gl2d_polar_line"]=require("./testplots-2d/gl2d_polar_line.json");
plots["gl2d_polar_scatter"]=require("./testplots-2d/gl2d_polar_scatter.json");
plots["gl2d_scatter-colorscale-colorbar"]=require("./testplots-2d/gl2d_scatter-colorscale-colorbar.json");
plots["gl2d_scatter-marker-line-colorscales"]=require("./testplots-2d/gl2d_scatter-marker-line-colorscales.json");
plots["gl2d_shared_axes_subplots"]=require("./testplots-2d/gl2d_shared_axes_subplots.json");
plots["gl2d_show_legend"]=require("./testplots-2d/gl2d_show_legend.json");
plots["gl2d_simple_annotation"]=require("./testplots-2d/gl2d_simple_annotation.json");
plots["gl2d_simple_inset"]=require("./testplots-2d/gl2d_simple_inset.json");
plots["gl2d_simple_subplot"]=require("./testplots-2d/gl2d_simple_subplot.json");
plots["gl2d_size_margins"]=require("./testplots-2d/gl2d_size_margins.json");
plots["gl2d_stacked_coupled_subplots"]=require("./testplots-2d/gl2d_stacked_coupled_subplots.json");
plots["gl2d_stacked_subplots"]=require("./testplots-2d/gl2d_stacked_subplots.json");
plots["gl2d_styling_names"]=require("./testplots-2d/gl2d_styling_names.json");
plots["gl2d_text_chart_arrays"]=require("./testplots-2d/gl2d_text_chart_arrays.json");
plots["gl2d_text_chart_basic"]=require("./testplots-2d/gl2d_text_chart_basic.json");
plots["gl2d_text_chart_invalid-arrays"]=require("./testplots-2d/gl2d_text_chart_invalid-arrays.json");
plots["gl2d_text_chart_styling"]=require("./testplots-2d/gl2d_text_chart_styling.json");
plotButtons(plots, "./testplots-2d/");