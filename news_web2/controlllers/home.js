app.controller("Ctr",function($scope,$http){
	$scope.swiper=new Swiper(".swi",{
		autoplay:2000,
		loop:true,
        "pagination":".swiper-pagination"
	});
	$http({
		method:"get",
		url:"template/index.json"
	}).success(function (res) {
		$scope.Objcontent=res.homeCont
    });
    $scope.Slide = new Swiper(".tabSlide",{
        onSlideChangeEnd:function () {
          $(".btn").eq($scope.Slide.activeIndex).addClass("ys").siblings().removeClass("ys")
        }
    })
    $(".btn").click(function () {
        $scope.$inx = $(this).index();
        $(this).addClass("ys").siblings().removeClass("ys")
       $scope.Slide.slideTo($scope.$inx,1000,false)
    })
})
