(function() {var implementors = {};
implementors["eventually_core"] = [{"text":"impl&lt;A, S&gt; Error for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Error + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Error + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl Error for Error","synthetic":false,"types":[]},{"text":"impl Error for SubscriberError","synthetic":false,"types":[]},{"text":"impl Error for Error","synthetic":false,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl Error for StoreError","synthetic":false,"types":[]},{"text":"impl Error for SubscriberError","synthetic":false,"types":[]},{"text":"impl Error for SubscriptionError","synthetic":false,"types":[]}];
implementors["eventually_util"] = [{"text":"impl Error for ConflictError","synthetic":false,"types":[]},{"text":"impl Error for LaggedError","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()