    let activeIndex = 0
      var imagesource
      const srnshots = document.getElementsByClassName('srnshots')

      for(let x =0 ; x < srnshots.length; x++){
          let srnshot = srnshots[x]

          srnshot.onclick = function(){
            // alert(x)

            switch(x){
              case 0:
              imagesource = [
                {img: 'images/dental/admin/dashboard.PNG', width: '100%'},
                {img: 'images/dental/admin/appointment.PNG', width: '100%'},
                {img: 'images/dental/admin/pharmacy.PNG', width: '100%'},
                {img: 'images/dental/admin/reportindex.PNG', width: '100%'},
                {img: 'images/dental/admin/records.PNG', width: '100%'},
                {img: 'images/dental/admin/reports.PNG', width: '100%'},
                {img: 'images/dental/admin/schedule.PNG', width: '100%'},
                {img: 'images/dental/admin/settings.PNG', width: '100%'},
                {img: 'images/dental/admin/transaction.PNG', width: '100%'},
                {img: 'images/dental/admin/form.PNG', width: '100%'},
                {img: 'images/dental/admin/stats.PNG', width: '100%'},
                {img: 'images/dental/admin/pie.PNG', width: '100%'},
                {img: 'images/dental/admin/receipt.PNG', width: '100%'},
                {img: 'images/dental/patient/dashboard.PNG', width: '100%'},
                {img: 'images/dental/patient/appointment.PNG', width: '100%'},
                {img: 'images/dental/patient/records.PNG', width: '100%'},
                {img: 'images/dental/patient/reservationform.PNG', width: '100%'},
                {img: 'images/dental/patient/transactionform.PNG', width: '100%'},


              ]
              break
              case 1:
              imagesource = [
                {img: 'images/dental/mobile/android/pic3.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic4.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic1.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic2.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic5.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic6.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic7.jpg', width: '40%'},
                {img: 'images/dental/mobile/android/pic8.jpg', width: '40%'},
                {img: 'images/dental/mobile/ios/appointment.PNG', width: '100%'},
                {img: 'images/dental/mobile/ios/dashboard.PNG', width: '100%'},
                {img: 'images/dental/mobile/ios/test.PNG', width: '100%'},
                {img: 'images/dental/mobile/ios/mac.PNG', width: '100%'},
              ]
              break
              case 2:
              imagesource = [
                {img: 'images/citv2/web/login.PNG', width: '100%'},
                {img: 'images/citv2/web/homepage.PNG', width: '100%'},
                {img: 'images/citv2/web/create_request.PNG', width: '100%'},
                {img: 'images/citv2/web/pending_request.PNG', width: '100%'},
                {img: 'images/citv2/web/edit_request.PNG', width: '100%'},
                {img: 'images/citv2/web/pending_cash_request.PNG', width: '100%'},
                {img: 'images/citv2/web/approved_request.PNG', width: '100%'},
                {img: 'images/citv2/web/acknowledgement.PNG', width: '100%'},
                {img: 'images/citv2/web/route_planning.PNG', width: '100%'},
                {img: 'images/citv2/web/create_do.PNG', width: '100%'},
                {img: 'images/citv2/web/doapproval.PNG', width: '100%'},
                {img: 'images/citv2/web/active_do_list.PNG', width: '100%'},
                {img: 'images/citv2/web/reports.PNG', width: '100%'},
                {img: 'images/citv2/web/reportMap.PNG', width: '100%'},
                {img: 'images/citv2/web/print_dispatch.PNG', width: '100%'},
                {img: 'images/citv2/web/settings.PNG', width: '100%'},
                {img: 'images/citv2/web/clusterring.PNG', width: '100%'},
                {img: 'images/citv2/web/clusterring2.PNG', width: '100%'},
              ]
              break
              case 3:
              imagesource = [
                {img: 'images/citv2/mobile/login.jpg', width: '40%'},
                {img: 'images/citv2/mobile/allowlocation.jpg', width: '40%'},
                {img: 'images/citv2/mobile/dolist.jpg', width: '40%'},
                {img: 'images/citv2/mobile/viewdo.jpg', width: '40%'},
                {img: 'images/citv2/mobile/doinfo.jpg', width: '40%'},
                {img: 'images/citv2/mobile/siteinfo.jpg', width: '40%'},
                {img: 'images/citv2/mobile/clientsign.jpg', width: '40%'},
                {img: 'images/citv2/mobile/cashsign.jpg', width: '40%'},
                {img: 'images/citv2/mobile/notif.jpg', width: '40%'},
                {img: 'images/citv2/mobile/scan.jpg', width: '40%'},
                {img: 'images/citv2/mobile/map.jpg', width: '40%'},
                {img: 'images/citv2/mobile/profile.jpg', width: '40%'},
              ]
              break
              case 4:
              imagesource = [
                {img: 'images/project3/picture1.jpg', width: '40%'},
                {img: 'images/project3/picture4.jpg', width: '40%'},
                {img: 'images/project3/picture2.jpg', width: '40%'},
                {img: 'images/project3/picture3.jpg', width: '40%'},
              ]
              break
              case 5:
              imagesource = [
                {img: 'images/project3/reactnative/splashscreen.PNG', width: '40%'},
                {img: 'images/project3/reactnative/map.PNG', width: '40%'},
                {img: 'images/project3/reactnative/world.PNG', width: '40%'},
                {img: 'images/project3/reactnative/php.PNG', width: '40%'},
                {img: 'images/project3/reactnative/countries.PNG', width: '40%'},
              ]
              break
              case 6:
               imagesource = [
                {img: 'images/project4/index.PNG', width: '100%'},
                {img: 'images/project4/dashboard.PNG', width: '100%'},
                {img: 'images/project4/barangay.PNG', width: '100%'},
                {img: 'images/project4/family.PNG', width: '100%'},
                {img: 'images/project4/familyinfo.PNG', width: '100%'},
                {img: 'images/project4/generatePass.PNG', width: '100%'},
                {img: 'images/project4/generateAll.PNG', width: '100%'},
               ]
              break
              case 7:
              imagesource = [
                {img: 'images/project4/mobile/Capture.PNG', width: '100%'},
                {img: 'images/project4/mobile/pic1.jpg', width: '40%'},
                {img: 'images/project4/mobile/pic2.jpg', width: '40%'},
                {img: 'images/project4/mobile/pic3.jpg', width: '40%'},
                {img: 'images/project4/mobile/pic4.jpg', width: '40%'},
                {img: 'images/project4/mobile/pic5.jpg', width: '40%'},
                {img: 'images/project4/mobile/pic6.jpg', width: '40%'},
              ]
              break
              case 8:
              imagesource = [
                {img: 'images/project4/mobilereact/img1.jpg', width: '40%'},
                {img: 'images/project4/mobilereact/img2.jpg', width: '40%'},
                {img: 'images/project4/mobilereact/img3.jpg', width: '40%'},
                {img: 'images/project4/mobilereact/img4.jpg', width: '40%'},
              ]
              break
              case 9:
              imagesource = [
                {img: 'images/inventory/index.PNG', width: '100%'},
                {img: 'images/inventory/dashboard.PNG', width: '100%'},
                {img: 'images/inventory/settings.PNG', width: '100%'},
                {img: 'images/inventory/reports.PNG', width: '100%'},
                {img: 'images/inventory/itemlist.PNG', width: '100%'},
                {img: 'images/inventory/iteminfo.PNG', width: '100%'},
                {img: 'images/inventory/createinbound.PNG', width: '100%'},
                {img: 'images/inventory/inboundlist.PNG', width: '100%'},
                {img: 'images/inventory/detailed.PNG', width: '100%'},
                {img: 'images/inventory/pdf.PNG', width: '100%'},
              ]
              break
              case 10:
               imagesource = [
                {img: 'images/shop/index.PNG', width: '100%'},
                {img: 'images/shop/dashboard.PNG', width: '100%'},
                {img: 'images/shop/paypal.PNG', width: '100%'},
                {img: 'images/shop/records.PNG', width: '100%'},
                {img: 'images/shop/adminlogin.PNG', width: '100%'},
                {img: 'images/shop/admindashboard.PNG', width: '100%'},
                {img: 'images/shop/adminreports.PNG', width: '100%'},
              ]
              
                break
              case 11:
                imagesource = [
                    {img: 'images/shop/react/index.PNG', width: '100%'},
                    {img: 'images/shop/react/cart.PNG', width: '100%'},
                    {img: 'images/shop/react/checkout.PNG', width: '100%'},
                    {img: 'images/shop/react/paypal.PNG', width: '100%'},
                    {img: 'images/shop/react/order.PNG', width: '100%'},
                    {img: 'images/shop/react/wish.PNG', width: '100%'},
                ]
                break
              case 12:
               imagesource = [
                {img: 'images/project2/login.PNG', width: '100%'},
                {img: 'images/project2/index.PNG', width: '100%'},
                {img: 'images/project2/dashboard.PNG', width: '100%'},
                {img: 'images/project2/flm.PNG', width: '100%'},
                {img: 'images/project2/slm.PNG', width: '100%'},
                {img: 'images/project2/reportlist.PNG', width: '100%'},
                {img: 'images/project2/print.PNG', width: '100%'},
                {img: 'images/project2/settings.PNG', width: '100%'},
               ]
              break
              case 13:
              imagesource = [
                {img: 'images/project6/login.PNG', width: '100%'},
                {img: 'images/project6/index.PNG', width: '100%'},
                {img: 'images/project6/dispatch.PNG', width: '100%'},
                {img: 'images/project6/create.PNG', width: '100%'},
                {img: 'images/project6/PM.PNG', width: '100%'},
                {img: 'images/project6/reports.PNG', width: '100%'},
                {img: 'images/project6/settings.PNG', width: '100%'},
              ]
              break
              case 14:
              imagesource = [
                {img: 'images/ihatid/login.png', width: '100%'},
                {img: 'images/ihatid/login2.png', width: '100%'},
                {img: 'images/ihatid/passenger_profile.png', width: '100%'},
                {img: 'images/ihatid/booking.png', width: '100%'},
                {img: 'images/ihatid/waiting.png', width: '100%'},
                {img: 'images/ihatid/rider_book.png', width: '100%'},
              ]
              break
              default:
              break
            }


            let screenshotModal = document.getElementById('screenshotModal')
            screenshotModal.style.display = "block"
            activeIndex = 0
            checkActiveIndex()

           


            let screenshotimage = document.getElementById('screenshotimage')
            screenshotimage.setAttribute("src", imagesource[0].img)
            screenshotimage.style.width = imagesource[0].width
            let screenshotNo = document.getElementById('screenshotNo')
            screenshotNo.innerHTML = `Screenshot 1 of ${imagesource.length}`

          }
      }

      const hideModal = ()=>{
        const modal = document.getElementsByClassName('modal')
        for(let x = 0 ; x < modal.length; x++){
          modal[x].style.display = 'none'
        }
      }

      const checkActiveIndex = ()=>{
  
          let prevImage = document.getElementById('prevImage')
          let nextImage = document.getElementById('nextImage')

          if(activeIndex == 0){
            prevImage.setAttribute("disabled",true)
          }else{
             prevImage.removeAttribute("disabled")
          }

          if(activeIndex == (parseInt(imagesource.length) - 1)){
            nextImage.setAttribute("disabled",true)
          }else{
            nextImage.removeAttribute("disabled")
          }

          let screenshotimage = document.getElementById('screenshotimage')
          screenshotimage.setAttribute("src", imagesource[activeIndex].img)
          screenshotimage.style.width = imagesource[activeIndex].width
          let screenshotNo = document.getElementById('screenshotNo')
          screenshotNo.innerHTML = `Screenshot ${activeIndex+1} of ${imagesource.length}`

          screenshotimage.classList.add('animate__animated', 'animate__fadeIn');

          screenshotimage.addEventListener('animationend', () => {
              screenshotimage.classList.remove('animate__animated', 'animate__fadeIn')
          });
      }

      const prevImage = ()=>{
        activeIndex--
        checkActiveIndex()
      }

      const nextImage = ()=>{
        activeIndex++
        checkActiveIndex()
      }


  const yearxp = document.getElementById("yearxp")
  const datenow = new Date()
  const yearnow = datenow.getFullYear()
  const monthnow = datenow.getMonth()

  document.getElementById('currentYear').innerHTML = yearnow


  const setAnimationSpecialty = (index)=>{
       const element = document.getElementsByClassName('specialtylist')[index];
      element.classList.add('animate__animated', 'animate__flip');

      element.addEventListener('animationend', () => {
        // do something
        element.classList.remove('animate__animated', 'animate__fadeIn');
      });

  }



      const refreshanimation = ()=>{
            const animate__animated = document.getElementsByClassName('animate__animated')
            for(let x = 0 ; x < animate__animated.length; x++){
              animate__animated[x].classList.remove('animate__animated','animate__zoomIn','animate__flipInY')
            }
      }
      const Animation = (type, elements, animation ,action)=>{
          refreshanimation()
          let prefix = 'animate__'
          if(type == 'id'){
              elements.forEach((element)=>{
                 let el = document.getElementById(element)
                 el.classList.add(`${prefix}animated`,`${prefix}${animation}`)
              })
          }
   
        

      }

      const setActivestack = (index)=>{
        const buttonstack = document.getElementsByClassName('buttonstack')

        for(let x=0; x < buttonstack.length ; x++){
          buttonstack[x].classList.remove('activestack')
        }

        buttonstack[index].classList.add('activestack')

        const stacktech = document.getElementsByClassName('stacktech')

         for(let x=0; x < stacktech.length ; x++){
          stacktech[x].style.opacity = 0.2
        }

        let showstack
        switch(index){
          case 0:
            showstack = 'stacktech'
            break
          case 1:
            showstack = 'backendtech'
            break
          case 2:
            showstack = 'frontendtech'
            break
          case 3:
            showstack = 'mobiletech'
            break
          default:
            showstack = 'othertech'
            break
        }
        

        let activestack = document.getElementsByClassName(`${showstack}`)

        for(let x=0; x < activestack.length ; x++){
            activestack[x].style.opacity = 1
           activestack[x].style.float = "left"
        }

      }
