(function ($) {
  $.extend({
    uploadPreview : function (options) {

      // Options + Defaults
      var settings = $.extend({
        input_field: ".image-input",
        preview_box: ".image-preview",
        label_field: ".image-label",
        label_default: "Choose File",
        label_selected: "Change File",
        no_label: false,
        success_callback : null,
      }, options);

      // Check if FileReader is available
      if (window.File && window.FileList && window.FileReader) {
        if (typeof($(settings.input_field)) !== 'undefined' && $(settings.input_field) !== null) {
          $(settings.input_field).change(function() {
            var files = this.files;

            if (files.length > 0) {
			for(var i=0;i<files.length;i++){
				
			  var file = files[i];
              var reader = new FileReader();
			  reader.index=i;
			  reader.fileName=file.name;
              // Load file
              reader.addEventListener("load",function(event) {
				var index=this.index;
                var loadedFile = event.target;

                // Check format
                if (file.type.match('image')) {
                  // Image
                  $(settings.preview_box+index).css("background-image", "url("+loadedFile.result+")");
				  $(settings.preview_box+index).css("height", "140px");
				  $(settings.preview_box+index).css("width", "140px");
                  $(settings.preview_box+index).css("background-size", "cover");
                  $(settings.preview_box+index).css("background-position", "center center");
				  var fileNames= '<span class="am-badge">预览</span> ';
				  fileNames=fileNames+ '<span class="am-badge">' + this.fileName + '</span> ';
				  
				  $(settings.preview_box+index).html(fileNames);
                } else if (file.type.match('audio')) {
                  // Audio
                  $(settings.preview_box+index).html("<audio controls><source src='" + loadedFile.result + "' type='" + file.type + "' />Your browser does not support the audio element.</audio>");
                } else {
                  alert("This file type is not supported yet.");
                }
              });

              if (settings.no_label == false) {
                // Change label
                $(settings.label_field).html(settings.label_selected);
              }

              // Read the file
              reader.readAsDataURL(file);

              // Success callback function call
              if(!settings.success_callback) {
                settings.success_callback();
              }
			}
            } else {
              if (settings.no_label == false) {
                // Change label
                $(settings.label_field).html(settings.label_default);
              }

              // Clear background
              $(settings.preview_box).css("background-image", "none");

              // Remove Audio
              $(settings.preview_box + " audio").remove();
            }
          });
        }
      } else {
        alert("You need a browser with file reader support, to use this form properly.");
        return false;
      }
    }
  });
})(jQuery);