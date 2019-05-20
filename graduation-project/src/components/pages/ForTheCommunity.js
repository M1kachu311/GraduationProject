import React, { Component } from "react"
import CategoriesContainer from "../simpleComponents/CategoriesContainer";

const altText = 'article picture'

export class ForTheCommunity extends Component {

  state = {
    data: [
      {
		ID: 1,  
        Name: 'השכלה גבוהה',
        Description: 'של עוד לכאן שיתופית מבוקשים, של אחר עמוד בעברית, מפתח מבוקשים אנתרופולוגיה כלל מה. גם שכל החול כלליים. לערוך בידור שימושי בדף דת, את להפוך הבאים ותשובות היא, את ליום אקראי הגרפים אתה. מה עזרה ביולי וספציפיים צעד, של ויש הנדסת מדריכים. דת לערך ניהול ומהימנה כתב. מדעי הארץ אקראי גם זאת.',
		JobHolder: {
			ID: 1,
			Name: 'מיקאל',
			Title: 'חרטתן',
			Phone: '0403285734',
			Email: 'jorge@mail.com',
			Image: 'https://images.pexels.com/photos/2291039/pexels-photo-2291039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
		}
	  },
	  {
		ID: 1,  
        Name: 'השכלה גבוהה',
        Description: 'של עוד לכאן שיתופית מבוקשים, של אחר עמוד בעברית, מפתח מבוקשים אנתרופולוגיה כלל מה. גם שכל החול כלליים. לערוך בידור שימושי בדף דת, את להפוך הבאים ותשובות היא, את ליום אקראי הגרפים אתה. מה עזרה ביולי וספציפיים צעד, של ויש הנדסת מדריכים. דת לערך ניהול ומהימנה כתב. מדעי הארץ אקראי גם זאת.',
		JobHolder: {
			ID: 1,
			Name: 'מיקאל',
			Title: 'חרטתן',
			Phone: '0403285734',
			Email: 'jorge@mail.com',
			Image: 'https://images.pexels.com/photos/2291039/pexels-photo-2291039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
		}
	  },
	  {
		ID: 1,  
        Name: 'השכלה גבוהה',
        Description: 'של עוד לכאן שיתופית מבוקשים, של אחר עמוד בעברית, מפתח מבוקשים אנתרופולוגיה כלל מה. גם שכל החול כלליים. לערוך בידור שימושי בדף דת, את להפוך הבאים ותשובות היא, את ליום אקראי הגרפים אתה. מה עזרה ביולי וספציפיים צעד, של ויש הנדסת מדריכים. דת לערך ניהול ומהימנה כתב. מדעי הארץ אקראי גם זאת.',
		JobHolder: {
			ID: 1,
			Name: 'מיקאל',
			Title: 'חרטתן',
			Phone: '0403285734',
			Email: 'jorge@mail.com',
			Image: 'https://images.pexels.com/photos/2291039/pexels-photo-2291039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
		}
      }
    ]
  };

  render() {

    return this.state.data.map(info => {
      return (
        <CategoriesContainer
			key={info.ID}
			id={info.ID}
			title={info.Name}
			content={info.Description}
			alt={altText}
			JHKey={info.JobHolder.ID}
			JHName={info.JobHolder.Name}
			JHTitle={info.JobHolder.Title}
			JHPhone={info.JobHolder.Phone}
			JHEmail={info.JobHolder.Email}
			JHImage={info.JobHolder.Image}
        />
      )
    })
  }
}

export default ForTheCommunity;
