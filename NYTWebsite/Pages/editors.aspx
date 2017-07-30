<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="editors.aspx.cs" Inherits="Pages_editors" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="navbar">
        <div class="navbar-inner">
            <ul class="breadcrumb">
                <i class="icon-chevron-left hide-sidebar"><a href='#' title="Hide Sidebar" rel='tooltip'>&nbsp;</a></i>
                <i class="icon-chevron-right show-sidebar" style="display: none;"><a href='#' title="Show Sidebar" rel='tooltip'>&nbsp;</a></i>
                <li>
                    <a href="#">Home</a> <span class="divider">/</span>
                </li>
                <li class="active">WYSIWYG Editors</li>
            </ul>
        </div>
    </div>
    <div class="row-fluid">


        <div class="span12" id="content">
            <div class="row-fluid">
                <!-- block -->
                <div class="block">
                    <div class="navbar navbar-inner block-header">
                        <div class="muted pull-left">CKEditor Standard</div>
                    </div>
                    <div class="block-content collapse in">
                        <textarea id="ckeditor_standard"></textarea>
                    </div>
                </div>
                <!-- /block -->
            </div>
        </div>

        <div class="span12" id="content">
            <div class="row-fluid">
                <!-- block -->
                <div class="block">
                    <div class="navbar navbar-inner block-header">
                        <div class="muted pull-left">CKEditor Full</div>
                    </div>
                    <div class="block-content collapse in">
                        <textarea id="ckeditor_full"></textarea>
                    </div>
                </div>
                <!-- /block -->
            </div>
        </div>

        <div class="span12" id="content">
            <div class="row-fluid">
                <!-- block -->
                <div class="block">
                    <div class="navbar navbar-inner block-header">
                        <div class="muted pull-left">TinyMCE Basic</div>
                    </div>
                    <div class="block-content collapse in">
                        <textarea id="tinymce_basic"></textarea>
                    </div>
                </div>
                <!-- /block -->
            </div>
        </div>

        <div class="span12" id="content">
            <div class="row-fluid">
                <!-- block -->
                <div class="block">
                    <div class="navbar navbar-inner block-header">
                        <div class="muted pull-left">TinyMCE Full</div>
                    </div>
                    <div class="block-content collapse in">
                        <textarea id="tinymce_full"></textarea>
                    </div>
                </div>
                <!-- /block -->
            </div>
        </div>

        <div class="span12" id="content">
            <div class="row-fluid">
                <!-- block -->
                <div class="block">
                    <div class="navbar navbar-inner block-header">
                        <div class="muted pull-left">Bootstrap WYSIWYG</div>
                    </div>
                    <div class="block-content collapse in">
                        <textarea id="bootstrap-editor" placeholder="Enter text ..." style="width: 98%; height: 200px;"></textarea>
                    </div>
                </div>
                <!-- /block -->
            </div>
        </div>
        </div>
        <!--/.fluid-container-->
        <script src="../vendors/bootstrap-wysihtml5/lib/js/wysihtml5-0.3.0.js"></script>
        <script src="../vendors/jquery-1.9.1.min.js"></script>
        <script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="../vendors/bootstrap-wysihtml5/src/bootstrap-wysihtml5.js"></script>

		<script src="../vendors/ckeditor/ckeditor.js"></script>
		<script src="../vendors/ckeditor/adapters/jquery.js"></script>

		<script type="text/javascript" src="../vendors/tinymce/js/tinymce/tinymce.min.js"></script>

        <script src="../assets/scripts.js"></script>
        <script>

            $(document).ready(function () {
                //FormValidation.init();
                $("#liEditor").addClass("active");
            });
        $(function() {
            // Bootstrap
            $('#bootstrap-editor').wysihtml5();

            // Ckeditor standard
            $( 'textarea#ckeditor_standard' ).ckeditor({width:'98%', height: '150px', toolbar: [
				{ name: 'document', items: [ 'Source', '-', 'NewPage', 'Preview', '-', 'Templates' ] },	// Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
				[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],			// Defines toolbar group without name.
				{ name: 'basicstyles', items: [ 'Bold', 'Italic' ] }
			]});
            $( 'textarea#ckeditor_full' ).ckeditor({width:'98%', height: '150px'});
        });

        // Tiny MCE
        tinymce.init({
		    selector: "#tinymce_basic",
		    plugins: [
		        "advlist autolink lists link image charmap print preview anchor",
		        "searchreplace visualblocks code fullscreen",
		        "insertdatetime media table contextmenu paste"
		    ],
		    toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
		});

		// Tiny MCE
        tinymce.init({
		    selector: "#tinymce_full",
		    plugins: [
		        "advlist autolink lists link image charmap print preview hr anchor pagebreak",
		        "searchreplace wordcount visualblocks visualchars code fullscreen",
		        "insertdatetime media nonbreaking save table contextmenu directionality",
		        "emoticons template paste textcolor"
		    ],
		    toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
		    toolbar2: "print preview media | forecolor backcolor emoticons",
		    image_advtab: true,
		    templates: [
		        {title: 'Test template 1', content: 'Test 1'},
		        {title: 'Test template 2', content: 'Test 2'}
		    ]
		});

        </script>
    
</asp:Content>

