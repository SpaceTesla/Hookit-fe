// import { NextRequest, NextResponse } from "next/server";
// import RazorPay from "razorpay"

// const razorpay = new RazorPay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!
// })

// export async function POST(request: NextRequest) {
//     try {
//         const order = await razorpay.orders.create({
//             amount : 100*100,
//             currency :"INR",
//             receipt :"receipt#1",
//         })

//         return NextResponse.json({ orderId: order.id}, {status: 200})
//         } catch (error) {
//             return NextResponse.json({ error }, { status: 500 })
            
//     }
// }