(function() {var implementors = {};
implementors["eventually_postgres"] = [{"text":"impl&lt;Id, Event&gt; EventSubscriber for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Eq + Send + Sync + Clone + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send + Sync + Clone + 'static,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl&lt;Id, Event&gt; EventSubscriber for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: TryFrom&lt;String&gt; + Eq + Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Id as TryFrom&lt;String&gt;&gt;::Error: Error + Send + Sync + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Deserialize&lt;'de&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;Id, Event&gt; EventSubscriber for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Hash + Eq + Sync + Send + Clone + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Sync + Send + Clone + 'static,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()