通常在处理`DOM`事件时，为了阻止事件冒泡,这样写：
	
	ev.stopPropagation();         // ev 为事件回调函数的参数event

但有的时候却没有作用，子元素的`clcik`点击事件依然触发了父元素的`clickl`事件，解决方式：
	
	if(ev.target != ev.currentTarget){
       return false;          // 判断退出父元素的处理逻辑
   	}

`event`对象中的属性：
* `target`表示事件发生的对象，
* `currentTarget`表示当前事件冒泡到的父级层级节点对象。

通过判断两个对象是否相同，在父级处理是否响应点击事件逻辑。


______________
**放张事件属性截图：**
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019071122420658.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hlcm9ib3lsdWNr,size_16,color_FFFFFF,t_70)