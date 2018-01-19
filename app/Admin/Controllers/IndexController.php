<?php

namespace App\Admin\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Stock;
use Encore\Admin\Widgets\InfoBox;
use Encore\Admin\Controllers\Dashboard;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Layout\Column;
use Encore\Admin\Layout\Content;
use Encore\Admin\Layout\Row;

class IndexController extends Controller
{
    public function index()
    {
        return Admin::content(function (Content $content) {

            $content->header('Dashboard');
            $content->description('Description...');
            $content->row(function (Row $row) {
                $gift = Stock::first();
                $row->column(2, new InfoBox('万福如意礼盒剩余', 'balance-scale', 'aqua', '', $gift->gift1));
                $row->column(2, new InfoBox('世界花卉精选外币剩余', 'balance-scale', 'aqua', '', $gift->gift2));
                $row->column(2, new InfoBox('乐柏美保冰保温箱剩余', 'balance-scale', 'aqua', '', $gift->gift3));
                $row->column(2, new InfoBox('碧然德电热滤水壶剩余', 'balance-scale', 'aqua', '', $gift->gift4));
                $row->column(2, new InfoBox('佳能手机照片打印机剩余', 'balance-scale', 'aqua', '', $gift->gift5));
                $row->column(2, new InfoBox('科沃斯智能扫地机器人超薄二代剩余', 'balance-scale', 'aqua', '', $gift->gift6));
                $row->column(2, new InfoBox('象印多功能电火锅剩余', 'balance-scale', 'aqua', '', $gift->gift7));

                $order = Order::get();
                $order->where('gift', 'gift1')->count();
                $row->column(2, new InfoBox('万福如意礼盒兑换', 'calculator', 'green', '', $order->where('gift', 'gift1')->count()));
                $row->column(2, new InfoBox('世界花卉精选外币兑换', 'calculator', 'green', '', $order->where('gift', 'gift2')->count()));
                $row->column(2, new InfoBox('乐柏美保冰保温箱兑换', 'calculator', 'green', '', $order->where('gift', 'gift3')->count()));
                $row->column(2, new InfoBox('碧然德电热滤水壶兑换', 'calculator', 'green', '', $order->where('gift', 'gift4')->count()));
                $row->column(2, new InfoBox('佳能手机照片打印机兑换', 'calculator', 'green', '', $order->where('gift', 'gift5')->count()));
                $row->column(2, new InfoBox('科沃斯智能扫地机器人超薄二代兑换', 'calculator', 'green', '', $order->where('gift', 'gift6')->count()));
                $row->column(2, new InfoBox('象印多功能电火锅兑换', 'calculator', 'green', '', $order->where('gift', 'gift7')->count()));

            });
        });

    }
}
