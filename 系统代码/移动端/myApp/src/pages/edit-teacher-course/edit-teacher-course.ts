import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {TeachercourseService} from "../teacher-course/teachercourse.service";
import {TeacherCoursePage} from "../teacher-course/teacher-course";

/**
 * Generated class for the EditTeacherCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-teacher-course',
  templateUrl: 'edit-teacher-course.html',
})
export class EditTeacherCoursePage {
  persondata:any;
  course_id:any;
  course_number: any;
  course_name:any;
  class_time:any;
  class_location:any;
  currentdata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public teachercourseService:TeachercourseService,private toastCtrl:ToastController){
  }

  ionViewDidLoad() {
    console.log('sss');
    console.log('ionViewDidLoad EditTeacherCoursePage');
    console.log(this.navParams.data);
    this.persondata = this.navParams.data;
    this.course_number = this.navParams.data.course_number;
    this.course_name =this.navParams.data.course_name;
    this.class_time = this.navParams.data.class_time;
    this.class_location = this.navParams.data.class_location;
    this.course_id = this.navParams.data.id;
  }
  editcourse(){
    this.teachercourseService.changeCourse(this.course_id,this.course_number,this.course_name,this.class_time,this.class_location).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.navCtrl.pop();
      }
      else {
        let toast = this.toastCtrl.create({
          message: '更新失败',
          duration: 3000
        });
        toast.present();
      }
    });
  }
  deleteCourse(){
    this.teachercourseService.deleteCourse(this.course_id).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata = JSON.parse(result.data);
      /* this.currentdata2=JSON.parse(this.currentdata);*/
      if (this.currentdata['check']) {
        this.navCtrl.pop();
        console.log('fdsfaf');
      }
      else {
        let toast = this.toastCtrl.create({
          message: '删除失败',
          duration: 3000
        });
        toast.present();
      }
    });
  }
}
