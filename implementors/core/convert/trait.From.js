(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"eventually_app_example/order/struct.OrderItem.html\" title=\"struct eventually_app_example::order::OrderItem\">OrderItem</a>&gt;&gt; for <a class=\"struct\" href=\"eventually_app_example/order/struct.OrderItems.html\" title=\"struct eventually_app_example::order::OrderItems\">OrderItems</a>","synthetic":false,"types":["eventually_app_example::order::OrderItems"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"eventually_app_example/order/struct.OrderItems.html\" title=\"struct eventually_app_example::order::OrderItems\">OrderItems</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"eventually_app_example/order/struct.OrderItem.html\" title=\"struct eventually_app_example::order::OrderItem\">OrderItem</a>&gt;","synthetic":false,"types":["alloc::vec::Vec"]}];
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"eventually_core/aggregate/struct.AggregateRootBuilder.html\" title=\"struct eventually_core::aggregate::AggregateRootBuilder\">AggregateRootBuilder</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"eventually_core/aggregate/trait.Aggregate.html\" title=\"trait eventually_core::aggregate::Aggregate\">Aggregate</a>,&nbsp;</span>","synthetic":false,"types":["eventually_core::aggregate::AggregateRootBuilder"]},{"text":"impl&lt;SourceId, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>SourceId, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"eventually_core/store/persistent/struct.EventBuilder.html\" title=\"struct eventually_core::store::persistent::EventBuilder\">EventBuilder</a>&lt;SourceId, T&gt;","synthetic":false,"types":["eventually_core::store::persistent::EventBuilder"]}];
implementors["eventually_postgres"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://docs.rs/tokio-postgres/0.5/tokio_postgres/error/struct.Error.html\" title=\"struct tokio_postgres::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"eventually_postgres/store/enum.Error.html\" title=\"enum eventually_postgres::store::Error\">Error</a>","synthetic":false,"types":["eventually_postgres::store::Error"]}];
implementors["eventually_util"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/tokio/0.2.22/tokio/sync/broadcast/enum.RecvError.html\" title=\"enum tokio::sync::broadcast::RecvError\">RecvError</a>&gt; for <a class=\"struct\" href=\"eventually_util/inmemory/struct.SubscriberError.html\" title=\"struct eventually_util::inmemory::SubscriberError\">SubscriberError</a>","synthetic":false,"types":["eventually_util::inmemory::store::SubscriberError"]},{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;A&gt; for <a class=\"struct\" href=\"eventually_util/optional/struct.AsAggregate.html\" title=\"struct eventually_util::optional::AsAggregate\">AsAggregate</a>&lt;A&gt;","synthetic":false,"types":["eventually_util::optional::AsAggregate"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()