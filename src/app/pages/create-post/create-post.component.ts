import { Component } from "@angular/core";
import {
  ToolbarService,
  LinkService,
  ImageService
} from "@syncfusion/ej2-angular-richtexteditor";
import {
  HtmlEditorService,
  QuickToolbarService
} from "@syncfusion/ej2-angular-richtexteditor";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    QuickToolbarService
  ]
})
export class CreatePostComponent {
  public value: string = "";
  public tools: object = {
    items: [
      "Undo",
      "Redo",
      "|",
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "|",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "|",
      "SubScript",
      "SuperScript",
      "|",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "|",
      "OrderedList",
      "UnorderedList",
      "|",
      "Indent",
      "Outdent",
      "|",
      "CreateLink",
      "CreateTable",
      "Image"
    ]
  };
  public quickTools: object = {
    image: [
      "Replace",
      "Align",
      "Caption",
      "Remove",
      "InsertLink",
      "-",
      "Display",
      "AltText",
      "Dimension"
    ]
  };

  public result() {
    console.log(this.value);
  }
}
