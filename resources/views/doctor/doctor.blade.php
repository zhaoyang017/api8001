<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('res/doctor/css/reset2.css') }}">
    <link rel="stylesheet" href="{{ asset('res/doctor/css/index2.css') }}">
    <title>Document</title>
</head>
<body>
<section>
    <div class="title">
        <div class="offcice">
            {{ $doctor->category }}
        </div>
    </div>
    <div class="content">
        <div class="left">
            <img src="{{ asset('res/doctor/img/celebrated.png') }}" alt="">
        </div>
        <div class="center">
            <img src="{{ asset('upload/doctors') }}/doctor_{{ $doctor->id }}.jpg" alt="">
        </div>
        <div class="right">
            <div class="t">
                <div class="name">{{ $doctor->name }}</div>
                <p>简介：{{ $doctor->info }}</p>
            </div>
            <div class="h">
                @if(empty($list))
                    <p><span class="design">当前号</span> <span class="mask_one">空闲</span></p>
                    <p><span class="design">下一位</span> <span class="mask_two">空闲</span></p>
                @else
                    <p><span class="design">当前号</span> <span class="mask_one">{{ $doctor->id }}0{{ $index }} {{ json_decode($list[0])->name }}</span></p>
                    <p><span class="design">下一位</span> <span class="mask_two">{{ $doctor->id }}0{{ $index+1 }} {{ json_decode($list[1])->name }}</span></p>
                @endif
            </div>
        </div>
    </div>

</section>
</body>
<script type="application/javascript">
    setTimeout(function () {
        window.location.reload();
    }, 5000);
</script>
</html>