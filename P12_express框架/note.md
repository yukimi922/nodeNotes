### 根据请求方式的不同，获取参数的方法也不相同

<h3>req.query 与 req.pramas</h3>

#### get 方法

- '/products/:id' (请求方式：/products/123)
 
   - req.pramas 获取参数 id

- '/products'  (请求方式：/products?id=123)

  - req.query 获取参数 id

`如何获取参数与服务器解析有关系`


