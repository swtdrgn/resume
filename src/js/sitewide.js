(function(){
	var app = angular.module('sitewide', [])
	app.filter('keyword',['$sce',function($sce){
		return function(expression,displayText){
			console.log(expression);
			if(typeof expression === 'undefined'){return $sce.trustAsHtml(displayText);}
			//return $sce.trustAsHtml('<a' + (expression.href?' href="'+expression.href+'"':'') + ' data-original-title="' + expression.tooltip + '" data-placement="bottom"' + '>' + displayText + '</a>');
			return $sce.trustAsHtml('<a class="keyword"' + (expression.href?' href="'+expression.href+'"':'') + (expression.tooltip?' data-tooltip="' + expression.tooltip + '"':'') + (expression.modal?' data-toggle="modal" data-target="#' + expression.id + '"':'') + '>' + displayText + '</a>');

		}
	}]);
	app.filter('keyword222',['$sce',function($sce){
		return function(expression,displayText){
			return $sce.trustAsHtml('<keyword data='+expression+'>'+displayText+'</keyword>');
		}
	}]);
	app.directive('keyword',function(){
		return {
			scope: {
				data: '=data'
			},
			template:'{{data}}',
			link: function(scope,element,attr){
				attr.$set('title',scope.data.tooltip)
				attr.$set('data-placement','right');
				$(element).tooltip();
			}
		}
	});
	app.directive('html',function($compile){
		interpolate = function (value) {
			console.log($interpolate(value));
			return $interpolate(value);
		};
		return {
			scope: {
				data: '=sss',
				keyword: '=key'
			},
			//template:'{{data}}'
			link:function(scope,element,attr){
				element.html(scope.data);
				$compile(element.contents())(scope);
				$(element).children("keyword").tooltip();
			}
		}
	});
	app.directive('modal',function($compile){
		interpolate = function (value) {
			console.log($interpolate(value));
			return $interpolate(value);
		};
		return {
			scope: {
				data: '=sss',
				keyword: '=key'
			},
			//template:'{{data}}'
			link:function(scope,element,attr){
				element.html(scope.data);
				$compile(element.contents())(scope);
				$(element).children("keyword").tooltip();
			}
		}
	});

	app.directive('technology',function(){
		return {
			scope: {
				data: '=data',
				append: '=append'
			},
			template:'{{data.name}}{{append}}',
			link: function(scope,element,attr){
				attr.$set('title',(scope.data.language?scope.data.language+' ':'')+scope.data.type)
				attr.$set('data-placement','top');
				$(element).tooltip();
			}
		}
	});
})();