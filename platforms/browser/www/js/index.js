
        val = 0;

        function shift(src_id, dst_id, from, to) {
            val = 0;
            var src = document.getElementById(src_id);
            var dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScale(src, from, to);
        }

        function shiftPlus(src_id, dst_id) {
            val += 1;
            var src = document.getElementById(src_id);
            var dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScaleBy(src, val);
        }

        function shiftMinus(src_id, dst_id) {
            val -= 1;
            var src = document.getElementById(src_id);
            var dst = document.getElementById(dst_id);
            dst.innerHTML = chords.shiftScaleBy(src, val);
        }

        function parse(src_id, dst_id) {
            val = 0;
            var src = document.getElementById(src_id);
            var dst = document.getElementById(dst_id);
            dst.innerHTML = chords.parse(src);
        }
        