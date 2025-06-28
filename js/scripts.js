/* ./js/scripts.js in wip-silus-count of wip.bauska.org */
/* Dec 7-8, 2024 = 10,010 (6 hours approx)
   Dec 13-14, 2024 = 24,215 (10 hours approx)
   Dec 20-22, 2024 = 55,855 (16 hours approx)
   Jan 10-12, 2025 = 44,920 (21 hours approx) 
   Jan 17, 2025 = 36,000 (10 hours approx) 
   Jan 18, 19, 20, 2025 = 45,350 (30 hours approx) 
   Jan 24, 2025 = 12,150 (10 hours)
   Jan 25, 2025 = 32,057 (10 hours) 
   Jan 31, 2025 = 8,993 (4 hours) 
   Feb 1, 2025 = 42,700 (10 hours) 
   Feb 2, 2025 = 7,900 (2 hours) 
   Feb 7, 2025 = 29,950 (10+ hours) 
   Feb 8, 2025 = 24,050 (10 hours) 
   Feb 16, 2025 = 25,850 (10 hours) 
   feb 17, 2025 = 25,150 
   mar 13, 2025 = 25,149 
   mar 14, 2025 = 19,700 
   mar 15, 2025 = 30,000 
   mar 21, 2025 = 30,000 + 20,000 
   mar 28, 2025 = 6,700 
   mar 29, 2025 = 39,850 
   apr 4, 2025 = 13,450 
   Apr 5, 2025 = 40,000 
   Apr 11, 2025 = 50,000 
   Apr 12, 2025 = 30,000 
   Apr 25 = 40,000 
   Apr 26 = 30,000 
   May 2, 2025 = 50,000 
   May 3, 2025 = 50,000 
   May 23, 2025 = 50,000 
   May 24, 2025 = 40,400 
   JUn 6, 2025 = 9,600 
   Jun 27, 2025 = 10,300 */
let counter = 10010 + 24215 + 55855 + 44920 + 36000 + 45350 + 12150 + 32057 + 8993 + 42700 + 7900 + 29950 + 24050 
   + 25850 + 25150 + 25149 + 19700 + 30000 + 30000 + 20000 + 6700 + 39850 + 13450 + 40000 + 50000 + 30000 + 40000 
   + 30000 + 50000 + 50000 + 50000 + 40400 + 9600 + 10300;
/* 10,010 from Dec 7th-8th (6 hours - 1 day), 
   24,215 from Dec 13-14 (10 hours - 1 day), 
   55,855 from Dec 20, 21, 22 (16 hours - 2 days), 
   44,920 from Jan 10-12, 2025 (6pm-4:50am), 
   45,350 from Jan 17-20, 2025 (30 hrs approx) 
   12,150 from Jan 24, 2025 (10 hrs) 
   32,057 from Jan 25, 2025 (10 hrs) 
   8,993 from Jan 31, 2025 (4 hrs) 
   42,700 from Feb 1, 2025 (10 hours) 
   7,900 from Feb 2, 2025 (2 1/2 hours) 
   29,950 from Feb 7, 2025 (10 hours) 
   24,050 Feb 08, 2025 (10 hours) 
   25,850 Feb 16, 2025 (10 hours) 
   25,150 Feb 17, 2025 (10 hours) 
   25,149 Mar 13, 2025 (total 7 hours) 
   19,700 Mar 14, 2025 (total 6 hours)
   30,000 Mar 15, 2025 (10 hours) 
   30,000 Mar 21, 2025 
   20,000 Mar 23, 2025 
   6,700  Mar 28, 2025 
  39,850 Mar 29, 2025 
  13,450 Apr 4, 2025 
  40,000 Apr 5, 2025 
  50,000 Apr 11, 2025 
  30,000 Apr 12, 2025 
  40,000 Apr 25, 2025 
  30,000 Apr 26, 2025 
  50,000 May 2, 2025 
  50,000 May 3, 2025 
  50,000 May 23, 2025
  40,400 May 24, 2025
  9,600 Jun 6, 2025
 10,300 Jun 27, 2025
  all times are approximate. */

function count() {
  counter++;
  givenNumber = counter;
  output = givenNumber.toLocaleString('en-US'); 
  document.getElementById('number').innerHTML = output;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('clicker').onclick = count;
})
