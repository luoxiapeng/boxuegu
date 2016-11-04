
-- 讲师表
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher` (
  `tr_id` int(11) NOT NULL AUTO_INCREMENT,
  `tr_name` varchar(10) NOT NULL DEFAULT '' COMMENT '讲师姓名',
  `tr_pass` char(32) NOT NULL DEFAULT '''''',
  `tr_avatar` varchar(255) NOT NULL DEFAULT '',
  `tr_gender` tinyint(2) NOT NULL DEFAULT '0' COMMENT '性别',
  `tr_cellphone` char(11) NOT NULL DEFAULT '0' COMMENT '手机号码',
  `tr_email` varchar(30) NOT NULL DEFAULT '' COMMENT '电子邮箱',
  `tr_job_time` int(15) NOT NULL DEFAULT '0' COMMENT '入职时间',
  `tr_remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注信息',
  `tr_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`tr_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='讲师表';

-- 课程分类
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(10) NOT NULL DEFAULT '' COMMENT '分类名称',
  `cat_pid` int(11) NOT NULL DEFAULT '0' COMMENT '父级ID',
  `cat_order` int(11) NOT NULL DEFAULT '10' COMMENT '排序',
  `cat_ishide` tinyint(2) NOT NULL DEFAULT 0 COMMENT '是否隐藏',
  `cat_remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注信息',
  `cat_update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY (`cat_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='分类列';







