function route(handle,pathname,response) {
	console.log("About to route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response);
    
  } else {
    console.log("No request handler found for " + pathname);
    handle['/error'](response);
  }
};

exports.route = route;