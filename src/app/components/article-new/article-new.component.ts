import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';



@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {

  public article: Article;
  public status: string = "";  
  public page_title: string;
  public url: string;
  public is_edit: boolean;



  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    uploadAPI: {
      url: Global.url+'upload-img'     
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,   
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen Articulo',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('', '', '', null, null);
    this.page_title = "Crear Articulo";  
    this.url= Global.url;
    this.is_edit = false;


  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log('submit');
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;


          //Alerta
/*
          swal(
            'Articulo Creado!!',
            'El Articulo se ha creado correctamente',
            'success'
          );*/
          console.log(response.status);
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        console.log('error');
        this.status = 'error';
      }
    );

  }

  imageUpload(data: any) {
    let image_data = JSON.parse(data.response);
    alert(image_data.image);
    this.article.image = image_data.image;

  }
}
