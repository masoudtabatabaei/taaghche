import rewardBookOff40 from './assets/img/reward/reward-book-off-40.svg';
import rewardBookOff30 from './assets/img/reward/reward-book-off-30.svg';
import rewardSubOff40 from './assets/img/reward/reward-sub-off-40.svg';

const rewards = [
    {
        id : 1 ,
        status : 'active' ,
        statusHeader : '100 روز و 23 ساعت دیگر' ,
        cover: rewardBookOff40 ,
        needleLeaf : 3000 , 
        moreDetails : {
            title : 'تخفیف 40 درصد خرید کتابهای صوتی و متنی' ,
            useRules : [
                'برای خرید مجله‌ها و روزنامه‌ها هم می توان از این تخفیف استفاده کرد.' ,
                'مهلت استفاده از تخفیف ۳۰ روز پس از دریافت آن است.' ,
                'این تخفیف روی کتاب‌های تعدادی از ناشران قابل استفاده نیست. اسم این نشرها در راهنمای رویش آمده است.'
            ] ,
            useGuide : [
                'تعداد برگ‌های لازم برای دریافت تخفیف را جمع‌آوری کن. سپس دکمه دریافت جایزه را بزن.' 
            ]
        }
    } ,
    {
        id : 2 ,
        status : 'active',
        statusHeader : '' ,
        cover: rewardBookOff30 ,
        needleLeaf : 650 , 
        moreDetails : {
            title : 'تخفیف 30 درصد خرید کتابهای صوتی و متنی' ,
            useRules : [
                'برای خرید مجله‌ها و روزنامه‌ها هم می توان از این تخفیف استفاده کرد.' ,
                'این تخفیف روی کتاب‌های تعدادی از ناشران قابل استفاده نیست. اسم این نشرها در راهنمای رویش آمده است.'
            ] ,
            useGuide : [
                'تعداد برگ‌های لازم برای دریافت تخفیف را جمع‌آوری کن. سپس دکمه دریافت جایزه را بزن.' ,
                'پس از کلیک کردن روی «دریافت جایزه» کد تخفیف فعال می‌شود. دکمه «کپی کن» را فشار بده تا کد را کپی کنی.' ,
                'بعد از کپی کردن کد به «فروشگاه» برو و کتاب موردنظرت را پیدا کن.' ,
                'دکمه «خرید کتاب» را بزن.در قسمت «کد تخفیف یا هدیه دارم» کد تخفیفی را که کپی کرده‌ای وارد کن و دکمه ثبت را بزن.' ,
                'پس از ثبتِ کد تخفیف، کتاب مورد نظر را خریداری کن.'
            ]
        }
    } ,
    {
        id : 3 ,
        status : 'inactive',
        statusHeader : '18 آذرماه 1400' ,
        cover: rewardSubOff40 ,
        needleLeaf : 200 , 
        moreDetails : {
            title : 'تخفیف 40 درصد خرید اشتراک طاقچه بی‌نهایت' ,
            useRules : [
                'این تخفیف روی تمام مدت زمان‌های عضویت در طاقچه بی‌نهایت قابل استفاده است.' ,
                'مهلت استفاده از تخفیف ۳۰ روز پس از دریافت آن است.' ,
                'بخشی از کتاب‌ها و مجله‌های متنی طاقچه در کتابخانه بی‌نهایت قرار دارد.' ,
                'در حال حاضر کتاب‌های صوتی در این کتابخانه قرار ندارند.' ,
                'پیوسته کتاب‌ها و مجلات متنوعی به طاقچه بی‌نهایت اضافه می‌شود.' ,
                'در حالت آفلاین، فقط به آخرین کتابی که در «در حال خواندن» است، دسترسی داری. برای خواندن کتاب‌های دیگر، باید به اینترنت وصل شوی و کتاب را دانلود کنی.' ,
                'در هر ۲۴ ساعت، می‌توانی تا ۳۰ کتاب از کتابخانه بی‌نهایت قرض بگیری.' ,
                'پس از تمام شدن عضویت، به کتاب‌هایی که قرض گرفته‌ای دسترسی رایگان نداری، اما این کتاب‌ها از کتابخانه‌تان حذف نمی‌شود.' ,
                'حداکثر زمان عضویت در طاقچه بی‌نهایت ۲ سال است.'

            ] ,
            useGuide : [
                'تعداد برگ‌های لازم برای دریافت تخفیف را جمع‌آوری کن. سپس دکمه دریافت جایزه را بزن.' ,
                'پس از کلیک کردن روی «دریافت جایزه» کد تخفیف فعال می‌شود. دکمه «کپی کن» را فشار بده تا کد را کپی کنی.' ,
                'بعد از کپی کردن کد به قسمت«بی‌نهایت» برو. دکمهٔ «خرید اشتراک» یا «تمدید اشتراک» را انتخاب کن.' ,
                'در قسمت «کد تخفیف یا هدیه دارم» کد تخفیفی که کپی کرده‌ای وارد کن و دکمه ثبت را بزن.' ,
                'پس از ثبتِ کد تخفیف، اشتراک مورد نظرت را با تخفیف خریداری کن.' ,
                'هنگام «دریافت جایزه» به مهلت استفاده از کد دقت کن.' 
            ]
        }
    }
];

export default function RewardsInfo() {
    return rewards;
}